/**
* Criteria Studio, july 2011
* 
**/

(function() {	

	Ti.Gesture.addEventListener('orientationchange',function(e){
		$$.platformWidth = Ti.Platform.displayCaps.platformWidth;
		$$.platformHeight = Ti.Platform.displayCaps.platformHeight;	 
	});
	//Globally available theme object to hold theme colors/constants
	App.ui.theme = {
		textColor:'#000000',
		grayTextColor:'#888888',
		headerColor:'#333333',
		lightBlue:'#006cb1',
		darkBlue:'#93caed'//,
		//fontFamily: App.os({
		//	iphone:'Helvetica Neue',
		//	android:'Droid Sans'
		//})
	};

	//All shared property sets are declared here.
	App.ui.properties = {
		//grab platform dimensions only once to save a trip over the bridge
		platformWidth: Ti.Platform.displayCaps.platformWidth,
		platformHeight: Ti.Platform.displayCaps.platformHeight,
		
		//we use these for default components
		Button: {
			backgroundImage:'images/button_bg.png',
			height:50,
			width:250,
			color:'#000',
			font: {
				fontSize:18,
				fontWeight:'bold'
			}
		},	
		LiveLabel: {
			//color:App.ui.theme.textColor,
			font: {
				fontFamily:App.ui.theme.fontFamily,
				fontSize:24, 
				fontWeight: 'bold'
			},
			height:'auto',
		    shadowColor:'#999',
		    shadowOffset:{x:1,y:1},
		    color:'#fff',
			borderRadius:5,
			backgroundColor:'aaa',
		    textAlign:'center'
		},		
		MusicRow: {
			
			height:'40',
			selectedColor:'#333333',
			backgroundSelectedColor:'#aaaaaa',
			selectedBackgroundColor:'#aaaaaa',			
		    backgroundGradient:{
				type:'linear',
				colors:[
					{color:'#666666',position:0.0},
					{color:'#999999',position:0.40},
					{color:'#333333',position:1.0}
				]
			}
		},
		MusicLabel:{
		    color:'#fff',
		    height:'auto',
		    right:20,
			left:10,
			shadowColor:'#111111',
			shadowOffset:{x:0,y:1},
			font: {
				fontFamily:'STHeitiTC-Medium',
				fontSize:14, 
				fontWeight: 'bold'
			}			
		},
		Window: {
			navBarHidden:true,
			softInputMode:(Ti.UI.Android) ? Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE : ''
		},
		TableView: {
			backgroundImage:'images/ruff.png',
			separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE
		},
		TableViewRow: {
			backgroundImage:'images/tweet_bg.png',
			selectedBackgroundColor: App.ui.theme.darkBlue, //I know, this is dumb, but it's currently inconsistent x-platform
			backgroundSelectedColor: App.ui.theme.darkBlue,
			//height:110,
			className:'tvRow'
		},
		TextField: {
			height:55,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			color:'#000000'
		},
		TextArea: {
			borderRadius:10,
			backgroundColor:'#efefef',
			//gradient will only work on iOS
			backgroundGradient:{
				type:'linear',
				colors:[
					{color:'#efefef',position:0.0},
					{color:'#cdcdcd',position:0.50},
					{color:'#efefef',position:1.0}
				]
			}
		},
		
		//we use these as JS-based 'style classes'
		animationDuration: 500,
		stretch: {
			top:0,bottom:0,left:0,right:0
		},
		variableTopRightButton: {
			top:5,
			right:5,
			height:30,
			width:App.os({
				iphone:60,
				android:'auto'
			}),
			color:'#ffffff',
			font: {
				fontSize:12,
				fontWeight:'bold'
			},
			backgroundImage:'images/button_bg_black.png'
		},
		topRightButton: {
			top:5,
			right:5,
			height:30,
			width:38
		},
		headerText: {
			top:8,
			height:'auto',
			textAlign:'center',
			color:App.ui.theme.headerColor,
			font: {
				fontFamily:App.ui.theme.fontFamily,
				fontSize:18,
				fontWeight:'bold'
			}
		},
		headerView: {
			backgroundImage:'images/header_bg.png',
			height:40
		},
		boldHeaderText: {
			height:'auto',
			color:'#000000',
			font: {
				fontFamily:App.ui.theme.fontFamily,
				fontSize:14,
				fontWeight:'bold'
			}
		},
		smallText: {
			color:App.ui.theme.grayTextColor,
			font: {
				fontFamily:App.ui.theme.fontFamily,
				fontSize:10
			},
			height:'auto'
		},
		spacerRow: {
			backgroundImage:'images/spacer_row.png',
			height:30,
			className:'spacerRow'
		}
	};
})();

//global shortcut for UI properties, since these get used A LOT. polluting the global
//namespace, but for a good cause (saving keystrokes)
var $$ = App.ui.properties;
