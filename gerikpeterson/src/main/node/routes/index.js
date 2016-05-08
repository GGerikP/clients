var express = require('express');
var router = express.Router();
var config = require('config');
var configs = config.get('app');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render(
		'controller',
		{
					configs: configs
				,title: 'Controller'
		}
	);
});




module.exports = router;
