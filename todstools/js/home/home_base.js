/********************************
  -- File: home_base.js
  -- Author: Gerik Peterson
*********************************/

function buildhome() {
	addProductBoxes(null);
	buildSubNavMenu(mockBuildSubNavMenu());
}

function buildSubNavMenu(dataSourceObj) {

	var insertIndex = 0;
	var textToInsert = [];

	// Private Function for building the category levels--
	function buildCategoryLevels (menuElements) {

		var length = menuElements.length;
		for (var dataIndex = 0; dataIndex < length; dataIndex++) {
			var id            = menuElements[dataIndex].id;
			var title         = menuElements[dataIndex].title;
			var url           = menuElements[dataIndex].url;
			var img_src       = menuElements[dataIndex].img_src;

			textToInsert[insertIndex++] = '<li id="' + id + '" onclick="toggleMe(\'' + id + '\')">';
			textToInsert[insertIndex++] = '<img src="/static/img/bullet_closed.gif" />';
			textToInsert[insertIndex++] = '<a href="' + url + '">' + title + '<br />';
//			textToInsert[insertIndex++] = '<img src="' + img_src + '" />';
			textToInsert[insertIndex++] = '</a>';

			if (menuElements[dataIndex].menuElements != undefined) {
				textToInsert[insertIndex++] = '<ul>\n';
				buildCategoryLevels(menuElements[dataIndex].menuElements);
				textToInsert[insertIndex++] = '</ul>\n';
			}
			textToInsert[insertIndex++] = '</li>\n';
		}
	}

	// This will be sourced from the dataSourceObj
	// But for now we set it to an ambiguous value

	// Place to append the product boxes
	var $subNavMenu = $("#sub-nav-menu");

	buildCategoryLevels(dataSourceObj);

	$subNavMenu.append(textToInsert.join(''));
}

function addProductBoxes(dataSourceObj) {

	// TODO: the datasource
	//var data = dataSourceObj;

	// This will be sourced from the dataSourceObj
	// But for now we set it to an ambiguous value
	var length = 30;

	// Place to append the product boxes
	var $productGrid = $("#product_grid");

	var textToInsert = [];
	var insertIndex = 0;
	
	for (var dataIndex = 0; dataIndex < length; dataIndex++) {
		textToInsert[insertIndex++] = '<div class="productBox">';
		textToInsert[insertIndex++] = '<h3 class="product_title">Fancy Pants Product ' + dataIndex + '</h3><br />';
		var imgFileName = '50x50_product' + dataIndex + '.gif';
		textToInsert[insertIndex++] = '<img src="/img/products/' + imgFileName + '" alt="' + imgFileName + '" />';
		textToInsert[insertIndex++] = '</div>\n' ;
	}
	$productGrid.append(textToInsert.join(''));
}

function toggleMe(id) {
	console.log(id);
	$('#' + id + ' ul').toggle();
	console.log('done with toggle for: ' + id);
}

/*$("#sub-nav-menu").on('click', "li", function(event) {

	$(this).each(function(i) {
		console.log($(this).prop("id"));
	});

	$(this).children("ul").each(function(i) {
		console.log("Toggling: " + $(this).prop("id"));
		$(this).toggle();
	});
});
*/
/*
function toggleList() {
	$('.colapsableList').each(function (i) {
		console.log("This worked!");
	});
}
	$('.colapsableList').click(function () {
		console.log("This worked!");
		$("ul").each(function(i){
			$(this).css("display","none");
		});
	});
$(document).ready(function() {
	console.log("home_base.js document is ready");
});
*/
