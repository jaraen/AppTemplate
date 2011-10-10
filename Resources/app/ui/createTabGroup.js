
App.ui.createTabGroup = {};

(function(){
	

	//creates a tabgroup with the views contained on _args.views
	App.ui.createTabGroup = function(_args) {
		var views = _args.views,
			wins = [],
			tabs = [];
		
		var tabGroup = Ti.UI.createTabGroup({
			
		});
			
		for (var i = 0, l = views.length; i<l; i++) {

			wins.push(Titanium.UI.createWindow({  
			    title:views[i].title,
				navBarHidden:true,
				fullscreen:true,
				orientationModes: [Titanium.UI.LANDSCAPE_LEFT,	Titanium.UI.LANDSCAPE_RIGHT],
				viewHandler:views[i] //add this for access to the view
			}));
			wins[i].add(views[i]);

			tabs.push(Titanium.UI.createTab({  
			    icon:views[i].icon,
			    title:views[i].title,
			    window:wins[i],
			    index:i
			}));
			tabGroup.addTab(tabs[i]); 
		}


		tabGroup.addEventListener('focus', function(e){
				Ti.API.info('tab click ' + e.source.activeTab.index);
		});
		
		return tabGroup;
	};	
	
})();
