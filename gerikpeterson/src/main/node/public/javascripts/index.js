/* ********************************
 * 
 * File: index.js
 * Desc: Base JS file for the
 *       GerikPeterson.com index
 * Author: Gerik Peterson
 * 
 * *******************************/

$(document).ready(function() {

	$("#values").click(function() {
		$( "#content-profile" ).toggle("slide", { direction: "right" }, 1000).promise().done(function() {
			$( "#content-values" ).toggle("slide", { direction: "right" }, 1000);
		}).promise().done(function() {
			resizeContent("#content-profile");
		});
	});

	$("#back-values").click(function() {
		$( "#content-values" ).toggle("slide", { direction: "right" }, 1000).promise().done(function() {
	  		$( "#content-profile" ).toggle("slide", { direction: "right" }, 1000).promise();
		}).promise().done(function() {
			resizeContent("#content-values");
		});

	});

	$("#about-site").click(function() {
		$( "#content-profile" ).toggle("slide", { direction: "right" }, 1000).promise().done(function() {
			$( "#content-about-site" ).toggle("slide", { direction: "right" }, 1000);
		}).promise().done(function() {
			resizeContent("#content-profile");
		});
	});

	$("#back-about-site").click(function() {
		$( "#content-about-site" ).toggle("slide", { direction: "right" }, 1000).promise().done(function() {
	  		$( "#content-profile" ).toggle("slide", { direction: "right" }, 1000).promise();
		}).promise().done(function() {
			resizeContent("#content-about-site");
		});

	});

	$("#experience").click(function() {
		$( "#content-profile" ).toggle("slide", { direction: "right" }, 1000).promise().done(function() {
			$( "#content-experience" ).toggle("slide", { direction: "right" }, 1000);
		}).promise().done(function() {
			resizeContent("#content-experience");
		});

	});

	$("#back-experience").click(function() {
		$( "#content-experience" ).toggle("slide", { direction: "right" }, 1000).promise().done(function() {
	  		$( "#content-profile" ).toggle("slide", { direction: "right" }, 1000).promise();
		}).promise().done(function() {
			resizeContent("#content-profile");
		});

	});

	$("#interests").click(function() {
		$( "#content-profile" ).toggle("slide", { direction: "right" }, 1000).promise().done(function() {
			$( "#content-interests" ).toggle("slide", { direction: "right" }, 1000);
		}).promise().done(function() {
			resizeContent("#content-interests");
		});

	});

	$("#back-interests").click(function() {
		$( "#content-interests" ).toggle("slide", { direction: "right" }, 1000).promise().done(function() {
	  		$( "#content-profile" ).toggle("slide", { direction: "right" }, 1000).promise();
		}).promise().done(function() {
			resizeContent("#content-profile");
		});

	});

});

function resizeContent(id) {
	$height = $(id).height();
	console.log("Height = " + $height + " : ID = " + id);
	$("#center-content").height($height);
}

