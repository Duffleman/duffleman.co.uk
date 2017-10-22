export default class Theme {
	constructor() {
	}

	applyCss(properties = {}) {
		for (const key of Object.keys(properties)) {
			const value = properties[key];

			document.body.style[key] = value;
		}
	}
}
