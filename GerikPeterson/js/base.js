/********************************
  -- File: base.js
  -- Author: Gerik Peterson
*********************************/

function initMyPage() {

	console.log("TODO: Implement initMyPage()");

//	setHomePage();

}

function setHomePage() {

	$("body").load(
		"/static/html/playground/playground_index.html",
		function doAfter() {
			buildPlayground();
		});
}
