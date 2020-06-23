import {registerBlockType} from '@wordpress/blocks'
import {Component} from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch'

import PlansList from './plansList'

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
						selector: '.price',
						source: 'text'
					},
					// type: {
					// 	type: 'string',
					// 	selector: '.plan',
					// 	source: 'attribute',
					// 	attribute: 'data-type'
					// },
					// duration: {
					// 	type: 'string',
					// 	selector: '.plan',
					// 	source: 'attribute',
					// 	attribute: 'data-duration'
					// }
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
					this.setState({
						plans: plans
					})

					let planAtt = []

					plans.forEach(p => {
						planAtt.push({
							price: p.acf.price,
							duration: p.acf.duration,
							type: p.acf.type
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
				<div>
					{props.attributes.plans.map(p => (
						<div className="plan" data-type={p.type} data-duration={p.duration}>
						<p>$<span className="price">{p.price}</span></p>
					</div>
					))}
				</div>
			)
		}
	})
}

export default plans