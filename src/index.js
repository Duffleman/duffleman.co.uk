import Vue from 'vue';

import *  as Modules from './modules';

new Vue({
	el: '#dflBody',
	data: {
		current: null,
		gamingMode: false,
		modules: [],
	},

	mounted: () => {
		console.log(this);
		// Object.keys(Modules).map(m => this.modules.push(m));
	},

	methods: {

	},
});
