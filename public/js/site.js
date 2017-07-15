const switcher = document.getElementsByClassName('switcher');
const body = document.getElementById('dflBody');

for (const el of switcher) {
	el.addEventListener('click', (ev) => {
		switchBackground(el);
		ev.preventDefault();
	});
}

function switchBackground(el) {
	const img = el.childNodes[0];
	const src = img.src;
	const newSrc = `url('${src}')`;

	console.log(newSrc);

	body.style.background = newSrc;
}
