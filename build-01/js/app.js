/*
 * App.js file
 * main application
 */
define(['require', 'backbone', 'jquery', 'underscore', './routers/Router','./views/Home', './views/Page1', './views/Page2'],
function( require, Backbone, $, _ , router, homeView, page1View, page2View) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	
	
	var MyApp = MyApp || {
		Views: {
			Home: homeView,
			Page1: page1View,
			Page2: page2View			
		},
		Models: {
		},
		Utils: {
			stack: {header: ['Backbone.js', 'jQuery Mobile' , 'Handlerbars', 'RequireJS']}
		},
		defaults: {
			
		},
		Router: {},
		start: function(){
			$(document).ready(function () {
			    console.log('document ready');
					MyApp.Router = new router(MyApp);
			    Backbone.history.start();
			});			
		}
	};
	// make app global
	window.MyApp = MyApp;
	return MyApp;
});