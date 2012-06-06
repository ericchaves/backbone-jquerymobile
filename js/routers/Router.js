/**
 * Default backbone router
 * @class Router
 */
define(['jquery', 'underscore'],
function($, _) {
	"use strict";
	var App = {};	
	
	var Router = Backbone.Router.extend({

		/*
		 	Pay attention to routes order, because order matters.
			In the example below, page3 would never be hitted:
				"":"home",
	      ":page":"default",
				"page3": "home"
		*/
	  routes:{
				"": "default",
	      ":page":"default"
	  },

		// last argument must always be the Application
    initialize:function () {
			App = _.last(arguments);

       // Handle back button throughout the application
      $('.back').live('click', function(event) {
          window.history.back();
          return false;
      });
    	this.firstPage = true;
    },

		default:function(id){
			for (var view in App.Views){
				if (!id) id = view; // we assume that default view is our first view in Views
				if (view.toLowerCase() === id.toLowerCase()){
					console.log('routing #%s', id);
					this.changePage(new App.Views[view]);
				}else
					console.log('no view for #%s', id);
			}
		},

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = page.transition ? page.transition : $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }
	});

	return Router;
});