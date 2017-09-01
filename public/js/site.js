const switcher = document.getElementsByClassName('switcher');
const body = document.getElementById('dflBody');

for (const el of switcher) {
	el.addEventListener('click', (ev) => {
		switchBackground(el);
		ev.preventDefault();
	});

	if (window.localStorage) {
		const lastItem = localStorage.getItem('background');

		if (lastItem)
			body.style.background = lastItem;
	}
}

function switchBackground(el) {
	const img = el.childNodes[0];
	const src = img.src;
	const newSrc = `url('${src}')`;

	if (window.localStorage)
		localStorage.setItem('background', newSrc);

	body.style.background = newSrc;
}
