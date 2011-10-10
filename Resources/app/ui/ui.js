/**
* Criteria Studio, july 2011
**/

//Use the UI namespace for all UI component creation.  
//Each screen is defined in individual files (includes)
(function() {
	App.ui = {};
	
	
	//shorthand for alert dialog
	App.ui.alert = function(/*String*/ _title, /*String*/ _message) {
		Ti.UI.createAlertDialog({
			title:_title, 
			message:_message
		}).show();
	};

})();

//Include major UI components and styling properties
Ti.include(
	'/app/ui/styles.js',
	'/app/ui/createTabGroup.js',
	'/app/ui/AppWindow.js'	
);