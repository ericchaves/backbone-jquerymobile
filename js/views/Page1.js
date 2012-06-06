/**
 * Page1 - our first page
 * @class HomeView
 */
define(['jquery', 'hbs!templates/page1'],
function($, tpl) {
	"use strict";

	var view = Backbone.View.extend({
		template: tpl,
		render:function (eventName) {
		    $(this.el).html(this.template({header: ['Backbone.js', 'jQuery Mobile' , 'Handlerbars', 'RequireJS']}));
		    return this;
		}
	});

	return view;
});