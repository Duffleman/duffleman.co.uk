import Themes from './themes/index.js';
import Vue from './vue.js';

new Vue({
	el: '#dflBody',

	data: {
		activeTheme: null,
		themes: [],
	},

	mounted() {
		this.themes = Themes;

		this.loadTheme();
	},

	methods: {
		applyTheme(theme) {
			this.saveTheme(theme);

			this.activeTheme = new theme();
			this.activeTheme.apply();
		},

		saveTheme(theme) {
			if (window.localStorage)
				window.localStorage.setItem('theme', theme.name);
		},

		loadTheme() {
			if (window.localStorage) {
				var item = window.localStorage.getItem('theme');

				if (item) {
					const theme = Themes.find(t => t.name === item);

					this.applyTheme(theme);
				}
			}
		}
	},
});
