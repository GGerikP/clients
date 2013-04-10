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

function siteSearch(curobj){
	curobj.q.value="site: " + window.location.host + " " +curobj.searchtext.value
}

