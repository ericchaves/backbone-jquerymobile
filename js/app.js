define(['require', 'backbone', 'jquery', 'underscore', 'hbs!templates/home', 'hbs!templates/page1', 'hbs!templates/page2'],
function( require, Backbone, $, _ , tmpHome, tmpPage1, tmpPage2) {
	window.HomeView = Backbone.View.extend({
			
			template: tmpHome,
			
	    render:function (eventName) {
	        $(this.el).html(this.template({header: ['Backbone.js', 'jQuery Mobile' , 'Handlerbars', 'RequireJS']}));
	        return this;
	    }
	});

	window.Page1View = Backbone.View.extend({

	    template: tmpPage1,

	    render:function (eventName) {
	        $(this.el).html(this.template());
	        return this;
	    }
	});

	window.Page2View = Backbone.View.extend({

	    template: tmpPage2,

	    render:function (eventName) {
	        $(this.el).html(this.template());
	        return this;
	    }
	});

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
	        this.changePage(new HomeView());
	    },

	    page1:function () {
	        console.log('#page1');
	        this.changePage(new Page1View());
	    },

	    page2:function () {
	        console.log('#page2');
	        this.changePage(new Page2View());
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
	    app = new AppRouter();
	    Backbone.history.start();
	});
});