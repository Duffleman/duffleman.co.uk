import Theme from './theme.js';

export default class ImageTheme extends Theme {
	constructor() {
		super();

		if (new.target === ImageTheme) {
			throw new Error('cannot_use_class_directly');
		}

		const name = new.target.name;
		const file = name.toLowerCase();

		this.applyCss({
			backgroundImage: `url(img/${file}.png)`,
		})
	}
}
