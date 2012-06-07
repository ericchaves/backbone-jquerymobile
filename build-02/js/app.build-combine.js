/*
 * This build will optimize CSS files only (standard.keepLines). 
 * JS files will be minified. Main modules will be combined. mainConfigFile is used to save us from duplicating paths 
 * but should be used with care since it has the least precedence. All license comments will be stripped-out.
 * 
 */

({appDir:"../",dir:"../../build-03",baseUrl:"js/",mainConfigFile:"main.js",paths:{jquery:"empty:"},removeCombined:!0,preserveLicenseComments:!1,modules:[{name:"main"}]})