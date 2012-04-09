
var Mods = require('/ModulePaths');

var Tools = require(Mods.TOOLS),
	HelloView = require(Mods.HELLOVIEW),
	$$ = require(Mods.STYLES);

module.exports = function(_args) {
	var win = Ti.UI.createWindow(Tools.combine($$.Window,{
		exitOnClose:true,
		//orientationModes: [Titanium.UI.LANDSCAPE_LEFT,	Titanium.UI.LANDSCAPE_RIGHT]
	}));
	
	var mainView = new HelloView();
	
	win.add(mainView);
	
	return win;
};

