/* ******************************************************
* File: dao.js
* Auth: Gerik Peterson
* Desc: Data Access Object
*
* *******************************************************/
var mysql    = require('mysql');
var Promise  = require('bluebird');

var dao      = {};

var pool = mysql.createPool({
		connectionLimit : 100, //important
		host     : 'localhost',
		user     : 'root',
		password : 'W9cked12',
		database : 'trevidential',
		debug    :  false
});


dao.queryDB = function(req,res) {

	console.log("Running queryDB.");

	return new Promise(function (resolve,reject) {
		pool.getConnection(function(err,connection) {
			if(err) {
				console.log("The connection failed!! " + err);
			} else {
				console.log("We got a connection! : " + connection.threadId);
			}
			console.log("What do we have here!?!?");
//			connection.release();
//			return connection;

			connection.on('error', function(err) {
				console.log(err);
				reject(err);
			});

			connection.query(req.query,function(err,rows){
				connection.release();
				if(err) {
					console.log("It all went to hell! " + err);
					reject(err);
				} else {
					res.rows = rows;
					console.log("We got records! " + rows);
					resolve(rows);
				}
			});
		});
	});
}

module.exports = dao;