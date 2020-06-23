const PlansList = props => {
	return (
		<div>
			<p>Plans Below</p>
			{props.plans.map(p => {
				// const features = Object.keys(p.acf.features).map(i => (
				// <li>{`${i}: ${p.acf.features[i]}`}</li>
				// ))

				return (
					<div className="plan" data-type={p.acf.type} data-duration={p.acf.duration}>
						<p>$<span className="price">{p.acf.price}</span></p>
						{/* <ul>
							{features}
						</ul> */}
						<pre>{JSON.stringify(p.acf.features)}</pre>
					</div>
				)
			})}
		</div>
	)
}

export default PlansList