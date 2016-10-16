/* ******************************************************
 *
 * File: user.js
 * Auth: Gerik Peterson
 * Desc: library containing the logic to obtain user details
 *
 * *****************************************************/

var dao     = require('../database/dao.js');

var user = {
	claim : ""
	,truth_score : 0
	,cred_score : 0
	,truthful_rating : 0
	,quantifiers:[]
	,supporting_statements : []
	,discrediting_statements : []
}

user.getUserDetails = function(req, res) {

	return new Promise(function (resolve,reject) {
		dao.queryDB(req,res);
	});
}

module.exports = user;