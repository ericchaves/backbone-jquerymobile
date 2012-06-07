/*
 * This build will only work the CSS files but will not touch the JS files
 */
({
  appDir: "../",
  dir: "../../build-01",
  baseUrl: "js/",
  optimize: "none",
  paths: {
      "jquery": "empty:"
  }
})