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

exports.species = function(req, res) {
	res.render('species', {
		ecoregion:req.params['ecoregion'],
		category:req.params['category'],
		community:req.params['community']
	});
};

exports.record = function(req, res) {
	res.render('record', {
		ecoregion:req.params['ecoregion'],
		category:req.params['category'],
		community:req.params['community'],
		record:req.params['record']
	});
};
