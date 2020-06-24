import Yes from '../../img/yes.svg'
import No from '../../img/no.svg'
import Extra from '../../img/extra.svg'

const Plans = ({plans, className}) => {
	return (
		<div className={className}>
			<fieldset>
				<input 
					id="individual" 
					value="individual" 
					type="radio" 
					name="plan-type"
					checked
				/>
				<label htmlFor="individual">Individual Plans</label>
				<input 
					id="team" 
					value="team" 
					type="radio" 
					name="plan-type"
				/>
				<label htmlFor="team">Team Plans</label>
			</fieldset>
			<ul className="plans" data-filter="individual">
				{plans.map(p => (
					<Plan {...p} />
				))}
			</ul>
		</div>
	)
}

const Plan = ({type, price, features, duration}) => {
	return (
		<li className="plan" data-type={type} data-duration={duration}>
			<h3>{duration == 'month' ? 'Monthly' : 'Annual'}</h3>
			<p className="price">$<span>{price}</span></p>
			<ul className="features">
				{features.map(f => {
					let icon = Extra

					if(f.included == 'yes') {
						icon = Yes
					}
					else if(f.included == 'no') {
						icon = No
					}

					return (
						<li>
							<span className="feature">{f.feature}</span>
								<span dangerouslySetInnerHTML={{__html: icon}}/>
								{!['yes', 'no'].includes(f.included) && 
									<span className="value">$
										<span className="included">{f.included}</span>
									</span>
								}
						</li>
					)
				})}
			</ul>
		</li>
	)
}

export default Plans