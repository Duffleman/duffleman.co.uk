import * as ImageBasedThemes from './images.js';

const themes = [
	...Object.values(ImageBasedThemes),
];

export default themes;

for (const t of themes) {
	t.thumbnail = `img/${t.name.toLowerCase()}.png`;
}
