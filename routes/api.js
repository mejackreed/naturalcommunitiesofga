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
	db.Plant.find({
		'ecoregion.slug': ecoregion,
		'communitycategory.slug': communitycategory

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
	var record = req.params['record']
	db.Plant.find({
		'ecoregion.slug': ecoregion,
		'communitycategory.slug': communitycategory,
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
		db.Plant.findOne({
			'ecoregion.slug': ecoregion,
			'communitycategory.slug': communitycategory
		}).exec(function(err, result) {
			res.type('application/json');
			res.jsonp({
				data: result
			})
		})

	}

}