// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var leftData = [];
var leftSections = [];


function createSection(sectionName) {
	var section = Ti.UI.createTableViewSection();

	var customView = Ti.UI.createView({
		height : 'auto',
		backgroundColor : "#EEE",
		backgroundGradient : {
			type : "linear",
			startPoint : {
				x : "0%",
				y : "0%"
			},
			endPoint : {
				x : "0%",
				y : "100%"
			},
			colors : [{
				color : "#EEE",
				offset : 0.0
			}, {
				color : "#CCC",
				offset : 1.0
			}]
		}
	});

	var customLabel = Ti.UI.createLabel({
		top : 8,
		bottom : 8,
		left : 10,
		right : 10,
		height : 'auto',
		text : 'HEADER',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : '#666666'
	});

	customView.add(customLabel);

	section.headerView = customView;
	
	var args = {
			title : sectionName
	};
	section.add(Alloy.createController('menurow', args).getView());
	return section;
}

function rowSelect(e) {
	/*
	if (currentView.id != e.row.customView) {
		$.ds.contentview.remove(currentView);
		currentView = Alloy.createController(e.row.customView).getView();
		$.ds.contentview.add(currentView);
	}
	*/
}

	leftSections[0] = createSection('Download');	
	leftSections[1] = createSection('Sync');	
	leftSections[2] = createSection('Upload');	
	leftSections[3] = createSection('New Facility');	
	leftSections[4] = createSection('Admin Facility');	


	for (var i = 0; i < 5; i++) {
		leftData[i] = leftSections[i];	
	}

// Pass data to widget leftTableView and rightTableView
$.ds.leftTableView.data = leftData;

var currentView = Alloy.createController("view1").getView();
$.ds.contentview.add(currentView);

// Swap views on menu item click
$.ds.leftTableView.addEventListener('click', function selectRow(e) {
	rowSelect(e);
	$.ds.toggleLeftSlider();
});


// Set row title highlight colour (left table view)
var storedRowTitle = null;
$.ds.leftTableView.addEventListener('touchstart', function(e) {
	storedRowTitle = e.row.customTitle;
	storedRowTitle.color = "#FFF";
});
$.ds.leftTableView.addEventListener('touchend', function(e) {
	storedRowTitle.color = "#666";
});
$.ds.leftTableView.addEventListener('scroll', function(e) {
	if (storedRowTitle != null)
		storedRowTitle.color = "#666";
});

// Set row title highlight colour (right table view)

Ti.App.addEventListener("sliderToggled", function(e) {
	if (e.direction == "right") {
		$.ds.leftMenu.zIndex = 2;
	} else if (e.direction == "left") {
		$.ds.leftMenu.zIndex = 1;
	}
});		
/*
if (Ti.Platform.osname === 'iphone')
	$.win.open({
		transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
else
	$.win.open();
	*/

$.buildGrid = function(){


	var grid = $.grid;
	var rowstoMake = 5;
	
	var data = [];

	var section = grid.Section();

	var cell = grid.Cell();
	cell.addLabel({
		text: 'DCID'
	});
	
	section.addCell(cell);

	var cell = grid.Cell();
	cell.addLabel({
		text: 'Name'
	});
	section.addCell(cell);

	var cell = grid.Cell();
	cell.addLabel({
		text: 'Address'
	});
	section.addCell(cell);

	var cell = grid.Cell();
	cell.addLabel({
		text: 'ZipCode'
	});
	section.addCell(cell);


	var cell = grid.Cell();
	cell.addLabel({
		text: 'Priority'
	});
	section.addCell(cell);


	var cell = grid.Cell();
	cell.addLabel({
		text: 'Modality'
	});
	section.addCell(cell);		
	
	var cell = grid.Cell();
	cell.addLabel({
		text: 'Status'
	});
	section.addCell(cell);		
	
	var cell = grid.Cell();
	cell.addLabel({
		text: 'Type'
	});
	section.addCell(cell);		

	var cell = grid.Cell();
	cell.addLabel({
		text: 'Note'
	});
	section.addCell(cell);	
	
	var cell = grid.Cell();
	cell.addLabel({
		text: 'Y/N'
	});
	section.addCell(cell);	

	data.push(section);


	for (var r = 0; r < rowstoMake; r++) {

		/** ROW **/
		var row = grid.Row({
			className: 'celldata'
		});

		/** CELL **/
		if(r%2==0)
		{
		var cell1 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell1 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		cell1.addLabel({
			text: '1231 '+r,
		});
		row.addCell(cell1); /** END CELL **/

		/** CELL **/
		if(r%2==0)
		{
		var cell2 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell2 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		cell2.addLabel({
			text: ' Pre k for Toddlers '+r,
		});
		row.addCell(cell2); /** END CELL **/


		/** CELL **/
		if(r%2==0)
		{
		var cell3 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell3 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		cell3.addLabel({
			text: ' 123 East Street '+r,
		});
		row.addCell(cell3); /** END CELL **/



		/** CELL **/
		if(r%2==0)
		{
		var cell4 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell4 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		cell4.addLabel({
			text: '1000'+r,
		});
		row.addCell(cell4); /** END CELL **/



		/** CELL **/
		if(r%2==0)
		{
		var cell5 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell5 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		cell5.addLabel({
			text: 'High',
		});
		row.addCell(cell5); /** END CELL **/



		if(r%2==0)
		{
		var cell6 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell6 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		cell6.addLabel({
			text: 'GDC ',
		});
		row.addCell(cell6); /** END CELL **/

/** CELL **/
		if(r%2==0)
		{
		var cell7 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell7 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		row.addCell(cell7); /** END CELL **/

		if(r%2==0)
		{
		var cell8 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell8 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		
		
		cell8.addLabel({
			text: 'CRV ',
		});
		row.addCell(cell8); /** END CELL **/
		
		if(r%2==0)
		{
		var cell9 = grid.Cell({
			backgroundColor: '#FFFFFF'
		});	
		}else{
			var cell9 = grid.Cell({
			backgroundColor: '#EBEEF0'
		});
		}
		
		cell9.addLabel({
			text: 'Y',
		});
		row.addCell(cell9); /** END CELL **/
		
		data.push(row); /** END ROW **/

	}

	grid.init({
		data: data,
		fixedColumns: [30, 100]
	});

	grid.setClick($.gridClick);
};

$.gridClick = function(e) {
	alert("click: row " + e.row + ", column: " + e.column);
};

$.buildGrid();

//$.caseLoad.open();
