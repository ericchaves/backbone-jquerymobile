/**
 * Page1 - our first page
 * @class HomeView
 */
define(['jquery', 'hbs!templates/page2'],
function($, template) {
	"use strict";
	
	var view = Backbone.View.extend({
    template: template,
    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
	});
	
	return view;
});