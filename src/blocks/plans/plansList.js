import Yes from '../../img/yes.svg'
import No from '../../img/no.svg'
import Extra from '../../img/extra.svg'


const PlansList = props => {
	return (
		<ul className="plans">
			{props.plans.map(p => {
				const features = Object.keys(p.acf.features).map(i => {
					let icon = Extra

					if(p.acf.features[i] == 'yes') {
						icon = Yes
					}
					else if(p.acf.features[i] == 'no') {
						icon = No
					}

					return (
						<li>
							<span className="feature">{i}</span> - 
							<span>
								<span dangerouslySetInnerHTML={{__html: icon}}/>
								{!['yes', 'no'].includes(p.acf.features[i]) && 
									<span className="value">$
										<span className="included">{p.acf.features[i]}</span>
									</span>
								}
							</span>
						</li>
						)
				})

				return (
					<div className="plan" data-type={p.acf.type} data-duration={p.acf.duration}>
						<p>$<span className="price">{p.acf.price}</span></p>
						<ul className="features">
							{features}
						</ul>
					</div>
				)
			})}
		</ul>
	)
}

export default PlansList