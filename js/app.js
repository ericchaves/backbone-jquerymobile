define(['require', 'backbone', 'jquery', 'underscore', './routers/Router','./views/Home', './views/Page1', './views/Page2'],
function( require, Backbone, $, _ , router, homeView, page1View, page2View) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	"use strict";
	
	var MyApp = MyApp || {
		Views: {
			Home: homeView,
			Page1: page1View,
			Page2: page2View			
		},
		Models: {
			
		},
		Utils: {
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
	
	MyApp.start();

});