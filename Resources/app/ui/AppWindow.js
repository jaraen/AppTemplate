/**
* Criteria Studio, july 2011
* 
**/

(function() {
	var platformWidth = $$.platformWidth;
	
	//create the main application window. NO TABS
	App.ui.createAppWindow = function(_args) {
		var win = Ti.UI.createWindow(App.combine($$.Window,{
			exitOnClose:true,
			orientationModes: [Titanium.UI.LANDSCAPE_LEFT,	Titanium.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
		}));

		return win;
	};

	
	//create the main application window USING TABS
	/*
	App.ui.createAppWindow = function(_args) {

		//Create tabGroup with all views, one tab per view	
		var appTabGroup = App.ui.createTabGroup({
			views: [
				//put,
				//here
				//your views
				]
		});

		appTabGroup.addEventListener('focus', function(e){
				Ti.API.info('tab click ' + e.source.activeTab.index);
				clearInterval(_plcTimer);
				readUI();				
		});

		return appTabGroup;
	};
	*/
	
	
})();