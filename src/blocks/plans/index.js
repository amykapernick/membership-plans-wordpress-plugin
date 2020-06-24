import {registerBlockType} from '@wordpress/blocks'
import {Component} from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch'

import PlansList from './plansList'
import Plans from './plans'

const plans = () => {
	registerBlockType('membership/plans', {
		title: 'Membership Plans',
		icon: 'grid-view',
		category: 'widgets',
		attributes: {
			plans: {
				type: 'array',
				default: [],
				source: 'query',
				selector: '.plan',
				query: {
					price: {
						type: 'string',
						selector: '.price span',
						source: 'text'
					},
					type: {
						type: 'string',
						source: 'attribute',
						attribute: 'data-type'
					},
					duration: {
						type: 'string',
						source: 'attribute',
						attribute: 'data-duration'
					},
					features: {
						type: 'array',
						default: [],
						selector: '.features li',
						source: 'query',
						query: {
							feature: {
								type: 'string',
								selector: '.feature',
								source: 'text'
							},
							included: {
								type: 'string',
								selector: '.included',
								source: 'text'
							}
						}
					}
				}
			}
		},
		edit: class extends Component {
			constructor(props) {
				super(...arguments)
				this.props = props
				this.state = {
					plans: []
				}
			}

			componentDidMount() {
				apiFetch({path: '/wp/v2/plans'}).then(plans => {
					plans.sort((a, b) => (a.acf.price - b.acf.price))

					this.setState({
						plans: plans
					})

					let planAtt = []

					plans.forEach(p => {
						const features = []

						Object.keys(p.acf.features).map(i => (
							features.push({
								feature: i,
								included: p.acf.features[i]
							})
						))

						planAtt.push({
							price: p.acf.price,
							duration: p.acf.duration,
							type: p.acf.type,
							features: features
						})
					})

					this.props.setAttributes({plans: planAtt})
				})
			}

			render() {
				return (
					<div>
						<PlansList plans={this.state.plans} />
					</div>
				)
			}
		}, 
		save(props) {
			return (
				<Plans {...props.attributes} />
			)
		}
	})
}

export default plans