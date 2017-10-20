var app = new Vue({
	el: '#dflBody',
	data: {
		current: null,
		backgrounds: [
			'regal',
			'topography',
			'symphony',
			'sayagata',
			'playstation-pattern',
			'paisley',
			'geometry2',
			'confectionary',
			'bg',
			'doodles',
			'memphis-colorful',
			'gaming-pattern',
		],
		gamingBackgrounds: [
			'playstation-pattern',
			'gaming-pattern',
		],
	},

	mounted: function() {
		var item = this.loadStorage('background', 'bg');

		this.changeBg(item);
	},

	computed: {
		gamingMode: function () {
			if (this.gamingBackgrounds.includes(this.current))
				return true;

			return false;
		}
	},

	methods: {
		getUrl (file) {
			return 'img/' + file + '.png';
		},

		changeBg (file) {
			var fileUrl = this.getUrl(file);
			var body = document.body;
			var css = 'url(' + fileUrl + ')';

			this.saveStorage('background', file);

			this.current = file;

			body.style.background = css;
		},

		saveStorage(key, val) {
			if (window.localStorage) {
				window.localStorage.setItem(key, val);

				return val;
			}
		},

		loadStorage(key, def) {
			if (window.localStorage) {
				var item = window.localStorage.getItem(key);

				if (item)
					return item;
			}

			return def;
		}
	}
});
