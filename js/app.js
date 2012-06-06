define(['require', 'backbone', 'jquery', 'underscore', './views/Home', './views/Page1', './views/Home'],
function( require, Backbone, $, _ , homeView, page1View, page2View) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	"use strict";
	
	var MyApp = MyApp || {
		Views: {
			HomeView: homeView,
			Page1View: page1View,
			Page2View: page2View			
		},
		Models: {
			
		},
		Routers: {
			
		},
		Utils: {
			
		}
	};

	var AppRouter = Backbone.Router.extend({

	    routes:{
	        "":"home",
	        "page1":"page1",
	        "page2":"page2"
	    },

	    initialize:function () {
	        // Handle back button throughout the application
	        $('.back').live('click', function(event) {
	            window.history.back();
	            return false;
	        });
	        this.firstPage = true;
	    },

	    home:function () {
	        console.log('#home');
	        this.changePage(new MyApp.Views.HomeView());
	    },

	    page1:function () {
	        console.log('#page1');
	        this.changePage(new MyApp.Views.Page1View());
	    },

	    page2:function () {
	        console.log('#page2');
	        this.changePage(new MyApp.Views.Page2View());
	    },

	    changePage:function (page) {
	        $(page.el).attr('data-role', 'page');
	        page.render();
	        $('body').append($(page.el));
	        var transition = $.mobile.defaultPageTransition;
	        // We don't want to slide the first page
	        if (this.firstPage) {
	            transition = 'none';
	            this.firstPage = false;
	        }
	        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
	    }

	});

	$(document).ready(function () {
	    console.log('document ready');
	    MyApp.app = new AppRouter();
	    Backbone.history.start();
	});
});