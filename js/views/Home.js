/**
 * HomeView - our main page
 * @class HomeView
 */
define(['jquery', 'hbs!templates/home'],
function($, tmpHome) {
	"use strict";
	
	var view = Backbone.View.extend({
		template: tmpHome,
		render:function (eventName) {
		    $(this.el).html(this.template({header: ['Backbone.js', 'jQuery Mobile' , 'Handlerbars', 'RequireJS']}));
		    return this;
		}
	});
	
	return view;
});