/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('ecoregion');
};

exports.communitycategory = function(req, res) {
	res.render('communitycategory', {
		ecoregion:req.params['ecoregion']
	});
};

exports.community = function(req, res) {
	res.render('community', {
		ecoregion:req.params['ecoregion'],
		category:req.params['category']
	});
};

exports.record = function(req, res) {
	res.render('record', {
		ecoregion:req.params['ecoregion'],
		category:req.params['category'],
		record:req.params['record']
	});
};
