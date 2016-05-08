/* ******************************************************
* File: dao.js
* Auth: Gerik Peterson
* Desc:
*
* *******************************************************/
//var express  = require('express');
//var router   = express.Router();
var mysql    = require('promise-mysql');
var dao      = function(){};

var pool = mysql.createPool({
			connectionLimit : 100, //important
			host     : 'localhost',
			user     : 'root',
			password : 'W9cked12',
			database : 'trevidential',
			debug    :  false
	});

dao.handle_connection = function (req,res) {

	var fn = "dao.handle_connection";
	console.log(fn + " running with req.query = " + req.query);

	pool.getConnection().then(function(connection) {

		console.log('connected as id ' + connection.threadId);

		connection.query(req.query).then(function(rows){

			console.log("Inside " + fn + " : rows = " + rows);
//			res.rows = rows;
			connection.release();

		}).catch(function(err) {

			console.log("Returning: Error in connection database.");
			res.rows = {"code" : 100, "status" : "Error in connection database: " + err};
//			done(err);

		});
	});
}

module.exports = dao;