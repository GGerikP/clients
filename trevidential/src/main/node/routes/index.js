/* **************************************************
*
* File: index.js
* Auth: Gerik Peterson
* Desc: File for testing random shit.
*
* **************************************************/
var express  = require('express');
var router   = express.Router();
var Promise  = require('bluebird');
var dao      = require('../libs/database/dao.js');
var statement = require('../libs/statements/statement.js');
//var mysql    = require('mysql');

/* GET home page. */
router.get('/((id/):id)?*', function(req, res, next) {

	var fn = "router.get";
	console.log("Running: " + fn);

	console.log("Path: " + req.path);
	console.log(JSON.stringify(req.params));

	Promise.all([
		statement.getStatementDetails(req,res)
	]).then(
		function() {
			console.log(res.rows);
			res.render(
				'index'
				,{title: 'Trevidential'}
			);
		}
	).catch(function(err){
		console.log("Everything has gone to hell!" + err);
	});

});

module.exports = router;

