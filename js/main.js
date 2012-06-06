/* Loading frameworks and then load defined Application */
require.config( {
	paths: {
	    'backbone':         'lib/backbone-amd',
	    'underscore':       'lib/lodash',
	    'jquerymobile':     'lib/jquery.mobile-1.1.0',
			'app': 							'app' 
	}
});

require(['require', 'backbone', 'jquery', 'underscore' ],
function( require, Backbone, $, _ ) {
	console.log('loaded core libs');
	// jqm-config
	$(document).bind("mobileinit", function () {
	    $.mobile.ajaxEnabled = false;
	    $.mobile.linkBindingEnabled = false;
	    $.mobile.hashListeningEnabled = false;
	    $.mobile.pushStateEnabled = false;
	    // Remove page from DOM when it's being replaced
	    $('div[data-role="page"]').live('pagehide', function (event, ui) {
	        $(event.currentTarget).remove();
	    });
	});
	// loading jqm
  require(['require', 'jquerymobile', 'app'],
	function(require, $$ ) {
		console.log('loaded jqm');
	});
});