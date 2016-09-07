const elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
	mix.sass('app.scss', 'resources/assets/css/app.css');

	mix.scripts([
		'vendor/jquery-3.1.0.min.js',
		'vendor/bootstrap.min.js'
	], 'resources/assets/js/vendor.js');

	mix.copy('resources/assets/js/vendor.js', 'public/js/vendor.js');
	mix.copy('resources/assets/css/app.css', 'public/css/app.css');

	mix.browserSync({
		proxy: 'duffleman.app',
	});
});
