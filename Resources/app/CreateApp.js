/**
* Criteria Studio julio 2011
* 
**/

//All application functionality is namespaced here
var App = {};

(function() {

	App.app = {}; 

	//add to domo object the methods and properties from tools library
	tools.mixin(App, tools);
	
})();

//Include additional namespaces
Ti.include(
	'/app/config/config.js',
	'/app/model/model.js',
	'/app/ui/ui.js'
);