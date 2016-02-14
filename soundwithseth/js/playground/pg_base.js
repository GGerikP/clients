/********************************
  -- File: pg_base.js
  -- Author: Gerik Peterson
*********************************/

function buildPlayground() {
	buildPlaygroundHeader();
	buildPlaygroundBody();
	buildPlaygroundFooter();
	buildJqueryOverLay();

	stuff();
}

function buildPlaygroundHeader() {

	var $pgHeader = $("#playground_header");
	var $jqueryObjButton = $("<button />");
	$jqueryObjButton.html("JQuery Objects");
	$jqueryObjButton.bind("click",function() {
				$("#jqueryObjOverLay").css("display","block");
				});
	$jqueryObjButton.attr("stuff","things");
	
	$pgHeader.append($jqueryObjButton);
	/*$jqueryObjButton.prepend($pgHeader);*/
}

function buildPlaygroundBody() {
	
	var playground = $("#playground_body");
	console.log("Playground width is " + playground.width());

	var slideDivCount = 10;

	for (var i = 1; i <= slideDivCount; i++) {
		var newDiv = $("<div />");
		newDiv.attr("id","section" + i);
		newDiv.addClass("slidedivs");
		newDiv.html("Div #" + i);
		var divWidth = playground.width() / slideDivCount;
		newDiv.width(divWidth);
		console.log("Div #" + i + " width is " + divWidth + ".");

		switch(i) {
		case 4 :
			newDiv.html(newDiv.html() + "<br />Lots and lots and lots and lots and lots");
			for(var j = 0; j < 25; j++) {
				newDiv.html(newDiv.html() + " and lots and lots and lots and lots and lots");
			}
			newDiv.html(newDiv.html() + " and lots and lots and lots and lots of text!");
			break;
		};
		
		playground.append(newDiv);
	}
	
	initDivStyles();
}

function buildPlaygroundFooter() {
	console.log("The Playground Footer has not yet been implemented yet");
}

function initDivStyles() {

	var divBorderWidth = 1;

	$("div .slidedivs").each(function(i) {
		$(this).css("border-width", divBorderWidth + "px" + divBorderWidth + "px" + 0 + "px" + divBorderWidth + "px");
		$(this).css("border-style", "solid");
		$(this).css("border-color", "yellow");
		$(this).width($(this).width() - (divBorderWidth*2) + "px");
	});
	$("#section5").css("border-color", "blue");
}

function buildJqueryOverLay() {
	var $pg_container = $("#playground_container");
	var $jqueryObjOverLay = $("<div/>");
	$jqueryObjOverLay.attr("id","jqueryObjOverLay");
	$jqueryObjOverLay.addClass("page_obj");

	$jqueryObjOverLay.bind("click",function() {
			$(this).css("display","none");
		});

	//$exampleJQuery is jQuery object containing every element
	// in the HTML page
	var $exampleJQuery = $('*');

	var $keyList = $("<ul/>");
	$keyList.attr("id","keylist");

	//utility function provided for you (uses jQuery!);
	function addToKeyList(key) {
		$keyList.append('<li>'+key+'</li>');
	}

	jQuery.each($exampleJQuery, function(name, value) {
		addToKeyList(name + ": " + value);
	});

	//iterate over $exampleJQuery
	//calling addToKeyList for every key it contains
	for (var i = 0; i < $exampleJQuery.length; i++) {
		addToKeyList($exampleJQuery[i]);
	}

	$keyList.appendTo($jqueryObjOverLay);
	$jqueryObjOverLay.appendTo($pg_container);
	$("#jqueryObjOverLay").css("margin-left",-1*($("#jqueryObjOverLay").width()/2) + "px");

}

function stuff() {

	/******************************************************
	Task 1: Iterate through divs
	--subtask: add a class
	*******************************************************/
	// Iterate Through all of the div elements on the page
	// and add the class itsadiv on to them.
/*	$("div").each(function(i) {
		$(this).addClass("itsadiv");
	});
*/
	/******************************************************
	Task 2: Create a new element
	*******************************************************/
	// This creates a new ul element, then...
	$newUl = $('<ul id="new-ul"></ul>')

	// ...adds 5 list elements to it.  And then finally...
	for (var i = 1; i < 6; i++) {
		$newLi = $("<li />");
		$newLi.attr('name','item_name' + i);
		$newLi.html("I've overwritten the list item's inner HTML!!");
		$newUl.append($newLi);
	}

	$newUl2 = $newUl;
	// Adds it to whatever element has the id of section1
	$("#section1").append($newUl2);
	$("#section2").append($newUl);
	$("#section3").append($newUl);
	$("#section4").append($newUl);
	$("#section5").append($newUl);
}


