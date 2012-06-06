/**
 * Default backbone router
 * @class Router
 */
define(['jquery', 'underscore'],
function($, _) {
	
	var Router = Backbone.Router.extend({
		App: {},

	  routes:{
	      "":"home",
	      "page1":"page1",
	      "page2":"page2"
	  },

    initialize:function () {

			this.App = _.last(arguments);
			
       // Handle back button throughout the application
       $('.back').live('click', function(event) {
           window.history.back();
           return false;
       });
       this.firstPage = true;
    },

    home:function () {
        console.log('#home');
        this.changePage(new this.App.Views.Home());
    },

    page1:function () {
        console.log('#page1');
        this.changePage(new this.App.Views.Page1());
    },

    page2:function () {
        console.log('#page2');
        this.changePage(new this.App.Views.Page2());
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