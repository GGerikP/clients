/* ******************************************************
 *
 * File: argument.js
 * Auth: Gerik Peterson
 * Desc:
 *
 * *****************************************************/

//var dao     = require('../database/dao.js');

var argument = {
	claim : ""
	,truth_score : 0
	,cred_score : 0
	,truthful_rating : 0
	,quantifiers:[]
	,supporting_statements : []
	,discrediting_statements : []
}

argument.getArgumentDetailsById = function(request, result, id) {

		var pattern = /^\d+$/;

		if (pattern.test(id)) {
			console.log("Get Statement by ID: " + id);
		} else {
			console.log("Get Statement by string: " + id);
		}

		request.query = 'select * from statementtypes where statement_id = ' + id + ';';
		console.log("request.query = " + request.query);

		dao.handle_connection(request,result).done(
			function(request, result, results) {

		console.log("This is the statement id: " + results[0].statement_type_id);
		console.log("This is the type: " + results[0].type);
		console.log("This is the description: " + results[0].description);

		result.render(
			'index'
			,{title: 'Trevidential'}
		);
	});
}

module.exports = argument;