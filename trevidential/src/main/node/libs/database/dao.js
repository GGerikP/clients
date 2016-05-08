/* ******************************************************
* File: dao.js
* Auth: Gerik Peterson
* Desc:
*
* *******************************************************/

var mysql        = require('mysql');

var dao = function(){};

var pool = mysql.createPool({
		connectionLimit : 100, //important
		host     : 'localhost',
		user     : 'root',
		password : 'W9cked12',
		database : 'trevidential',
		debug    :  false
});

dao.queryDB = function(query,done,req,res) {
	pool.query(query,function(err,rows) {
		if (err) throw err;
		var results = rows;
	});
}

module.exports = dao;