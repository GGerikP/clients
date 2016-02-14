var express = require('express');
var router = express.Router();
var config = require('config');
var configs = config.get('app');

/* GET home page. */
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	if (id === "controller") {
		res.render(
			'controller',
			{
				 configs: configs
				,title: 'Controller'
			}
		);
	} else {
		res.render(
			'index',
			{
				 configs: configs
				,title: 'Gerik Peterson'
			}
		);
	}
});




module.exports = router;
