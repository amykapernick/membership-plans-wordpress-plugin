window.onload = () => {
	document.querySelectorAll('input[name="plan-type"').forEach(input => {
		input.addEventListener('click', (e) => {
			document.querySelector('.wp-block-membership-plans .plans').setAttribute('data-filter', e.srcElement.value)
		})
	})
}