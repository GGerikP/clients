var express = require('express');
var router = express.Router();
var config = require('config');
var configs = config.get('app');

/* GET home page. */
router.get('/hypocrites(/:id)?', function(req, res, next) {
	var id = req.params.id;
	if (id != "") {
		res.render(
			'hypocrites',
			{
				 configs: configs
				,title: 'Hypocrites' + id
			}
		);
	} else {
		res.render(
			'hypocrites',
			{
				 configs: configs
				,title: 'Gerik Peterson'
			}
		);
	}
});




module.exports = router;
