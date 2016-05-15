/* **************************************************
*
* File: test.js
* Auth: Gerik Peterson
* Desc: File for testing random shit.
*
* **************************************************/
var express  = require('express');
var router   = express.Router();
var Promise  = require('bluebird');
var dao      = require('../libs/database/dao_pool.js');
//var mysql    = require('mysql');

/* GET home page. */
router.get('/((id/):id)?*', function(req, res, next) {

	console.log("Running the router.get proc");
	console.log("Path: " + req.path);
	console.log(JSON.stringify(req.params));
	var statementId = req.params.id;
	console.log("statementId = " + statementId);
	var pattern = /^\d+$/;

	if (pattern.test(statementId)) {
		console.log("Get StatementId by numger: " + statementId);
	} else {
		var err = "This id is not a number: " + statementId;
	}
	req.query = 'select * from statementtypes where statement_type_id = ' + statementId + ';';

	Promise.all([
		dao.queryDB(req,res)
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

