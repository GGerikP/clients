/* ******************************************************
 *
 * File: statement.js
 * Auth: Gerik Peterson
 * Desc: library containing the logic to obtain statement details
 *
 * *****************************************************/

var Promise  = require('bluebird');
var dao     = require('../database/dao.js');

var statement = {
	claim : ""
	,truth_score : 0
	,cred_score : 0
	,truthful_rating : 0
	,quantifiers:[]
	,supporting_statements : []
	,discrediting_statements : []
}

statement.getStatementDetails = function(req, res) {

	var fn = "statement.getStatementDetails";
	console.log("Running: " + fn);

	var statementId = req.params.id;
	var pattern = /^\d+$/;

	if (pattern.test(statementId)) {
		console.log("Get StatementId by numger: " + statementId);
		req.query = '' +
			' select ' +
				' s.statement_id as parent_id ' +
				' ,s.statement as parent_statement ' +
				' ,c.statement_id as child_id ' +
				' ,c.statement as child_statement ' +
				' ,c.evidential_rank ' +
				' ,c.importance_rank ' +
				' ,st.support_type_id ' +
				' ,st.support_type ' +
			' from ' +
				' statements s ' +
				' left join statementsupportmap sm on s.statement_id        = sm.parent_statement_id ' +
				' left join statements c on sm.child_statement_id = c.statement_id ' +
				' left join supporttypes st on sm.support_type_id    = st.support_type_id ' +
			' where ' +
				' s.statement_id          = ? ' +
				';';
		console.log(req.query);
		req.queryArgs = [statementId];
	} else {
		var err = "This id is not a number: " + statementId;
	}


	return new Promise(function (resolve,reject) {
		dao.queryDB(req,res).then(function(){
			resolve(res.rows);
		}).catch(function(err){
			reject(res.err);
		});
	});
}

module.exports = statement;