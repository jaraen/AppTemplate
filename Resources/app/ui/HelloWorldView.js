
var Mods = require('/ModulePaths');

var Tools = require(Mods.TOOLS),
	$$ = require(Mods.STYLES);

module.exports = function() {
	
	var view = Ti.UI.createView({
		top:0, left:0, right:0, bottom:0,
		backgroundColor:'#fff',
		id:'MetronomeView'
	});
	

	var lbl = Ti.UI.createLabel(Tools.combine($$.Label, {
		text:'Hello Titanium World!',
		width:'auto'
	}));
	
	view.add(lbl)

	//require('/UIHelper').UIHelper(view);
	
	return view;
}
