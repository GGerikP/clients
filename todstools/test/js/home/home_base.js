/********************************
  -- File: home_base.js
  -- Author: Gerik Peterson
  -- TEST PACKAGE
*********************************/

function mockBuildSubNavMenu() {

	var subNavMenuData =
			[
				[[],[],[[],[]],[],[],[]],
				[[],[]],
				[],
				[],
				[[],[],[],[[]],[]],
				[],
				[[],[],[],[]],
				[],
				[[],[],[],[],[[]]],
				[],
				[[],[],[],[[],[[],[[]]]],[],[],[]],
				[[],[]]
			];

	// Private Function for building the category levels--
	function buildCategoryLevels (menuElements, parentID) {

		var length = menuElements.length;
		for (var dataIndex = 0; dataIndex < length; dataIndex++) {
			var elementID = parentID + dataIndex;
			menuElements[dataIndex].id      = "subcat" + elementID;
			menuElements[dataIndex].title   = "Sub-Cat " + elementID;
			menuElements[dataIndex].url     = "#";
			menuElements[dataIndex].img_src = "/static/img/subnav/25x25_subnavcat" + elementID.replace(".","_") + ".gif";

			if (menuElements[dataIndex].length > 0) {
				menuElements[dataIndex].menuElements = buildCategoryLevels(menuElements[dataIndex],elementID + ".");
			}
		}
		return menuElements;
	}

	subNavMenuData = buildCategoryLevels(subNavMenuData,"");

	return subNavMenuData;
}
