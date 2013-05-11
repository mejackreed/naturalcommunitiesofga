/*
 * Serve JSON to our AngularJS client
 */
var fs = require('fs');

var db = require('../db.js');

exports.ecoregion = function(req, res) {
	db.Plant.distinct('ecoregion').exec(function(err, result) {
		res.type('application/json');
		res.jsonp({
			data: result
		})
	})
}

exports.communitycategory = function(req, res) {
	var ecoregion = req.params['ecoregion']
	db.Plant.distinct('communitycategory', {
		'ecoregion.slug': ecoregion

	}).exec(function(err, result) {
		res.type('application/json');
		res.jsonp({
			data: result
		})
	})
}

exports.communityname = function(req, res) {
	var ecoregion = req.params['ecoregion']
	var communitycategory = req.params['communitycategory']
	db.Plant.distinct('community', {
		'ecoregion.slug': ecoregion,
		'communitycategory.slug': communitycategory

	}).exec(function(err, result) {
		res.type('application/json');
		res.jsonp({
			data: result
		})
	})
}

exports.species = function(req, res) {
	var ecoregion = req.params['ecoregion']
	var communitycategory = req.params['communitycategory']
	var community = req.params['community']
	console.log(community)
	db.Plant.find({
		'ecoregion.slug': ecoregion,
		'communitycategory.slug': communitycategory,
		'community.slug': community

	}).exec(function(err, result) {
		res.type('application/json');
		res.jsonp({
			data: result
		})
	})
}

exports.record = function(req, res) {
	var ecoregion = req.params['ecoregion']
	var communitycategory = req.params['communitycategory']
	var community = req.params['community']
	var record = req.params['record']
	db.Plant.find({
		'ecoregion.slug': ecoregion,
		'communitycategory.slug': communitycategory,
		'community.slug':community,
		'name.slug': record
	}).exec(function(err, result) {
		res.type('application/json');
		res.jsonp({
			data: result
		})
	})
}

exports.getone = function(req, res) {
	var ecoregion = req.params['ecoregion']
	var communitycategory = req.params['communitycategory']
	var community = req.params['community']

	if (communitycategory == undefined) {
		db.Plant.findOne({
			'ecoregion.slug': ecoregion
		}).exec(function(err, result) {
			res.type('application/json');
			res.jsonp({
				data: result
			})
		})
	} else {
		if (community == undefined) {
			db.Plant.findOne({
				'ecoregion.slug': ecoregion,
				'communitycategory.slug': communitycategory
			}).exec(function(err, result) {
				res.type('application/json');
				res.jsonp({
					data: result
				})
			})
		} else {
			db.Plant.findOne({
				'ecoregion.slug': ecoregion,
				'communitycategory.slug': communitycategory,
				'community.slug': community
			}).exec(function(err, result) {
				res.type('application/json');
				res.jsonp({
					data: result
				})
			})
		}
	}

}