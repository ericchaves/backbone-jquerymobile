require.config({paths:{backbone:"lib/backbone-amd",underscore:"lib/lodash",jquerymobile:"lib/jquery.mobile-1.1.0",Handlebars:"lib/require/handlebars-1.0.0.beta.6",hbs:"lib/require/hbs",MyApp:"app"},locale:"pt_br",hbs:{helperDirectory:"templates/helpers/",i18nDirectory:"templates/i18n/"}}),require(["require","backbone","jquery","underscore"],function(a,b,c,d){c(document).bind("mobileinit",function(){c.mobile.ajaxEnabled=!1,c.mobile.linkBindingEnabled=!1,c.mobile.hashListeningEnabled=!1,c.mobile.pushStateEnabled=!1,c('div[data-role="page"]').live("pagehide",function(a,b){c(a.currentTarget).remove()})}),a(["require","jquerymobile","MyApp"],function(a,b,c){c.start()})})