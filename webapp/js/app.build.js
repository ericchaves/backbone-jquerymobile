/*
 * This build will optimize CSS files only (standard.keepLines). 
 * JS files will be minified. Modules will be combined. mainConfigFile is used to save us from duplicating paths 
 * but should be used with care since it has the least precedence. All license comments will be stripped-out.
 * 
 */
({
  appDir: "../",
  dir: "../../build-04",
  baseUrl: "js/",
	mainConfigFile: 'main.js',
//	optimize: 'none',
  paths: {
      "jquery": "empty:", // jquery should be left0out since it's already included in our require-jquery file.
  },
//	removeCombined: true,
	preserveLicenseComments: false,
	modules: [
 		{ name: 'main', include : ['MyApp', 'jquerymobile'] }
	]
})