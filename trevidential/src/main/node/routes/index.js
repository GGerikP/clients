var express  = require('express');
var Promise  = require('bluebird');
var router   = express.Router();
//var argument = require('../libs/statements/argument.js');
var dao      = Promise.promisifyAll(require('../libs/database/dao_pool.js'));


function getStatementTypes(req, res, next) {

		return new Promise(function (fulfill, reject){

			var statementId = req.params.id;
			console.log("statementId = " + statementId);
			var pattern = /^\d+$/;

			if (pattern.test(statementId)) {
				console.log("Get StatementId by numger: " + statementId);
			} else {
				var err = "This id is not a number: " + statementId;
//				console.log(err);
				reject(err);
			}

			req.query = 'select * from statementtypes where statement_type_id = ' + statementId + ';';

			dao.handle_connection(req,res).then(function (rows){
				try {
					res.rows = rows;
					console.log("The returned rows are: " + res.rows);
					console.log("JSON.stringify = " + JSON.stringify(res.rows));
//					next();
					fulfill(render(req,res,next));
				} catch (ex) {
					console.log("Calling next failed(?) with " + ex);
//					next();
					reject(ex);
				}
			}, reject);
		});
}

function render(req, res, next) {

	console.log("Running render");

	res.render(
		'index'
		,{title: 'Trevidential'}
	);
	next();
}

/* GET home page. */
router.get('/((id/)(:id))?*', getStatementTypes, function(req, res, next) {
	console.log("Running the router.get proc");
})

module.exports = router;
