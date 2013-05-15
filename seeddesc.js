var mongoose = require("mongoose");
var _ = require('underscore')._;
//var slug = require('slug')
//var request = require('request');
//var moment = require('moment');
var csv = require('csv');
var fs = require('fs');

var uristring = process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/naturalcommunities';
var mongoOptions = {
	db: {
		safe: true
	}
};

var db = mongoose.connect(uristring, mongoOptions, function(err, res) {

});

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;


var descSchema = new Schema({
	ecoregion: {
		type: String,
	},
	communitycategory: {
		type: String,
	},
	community: {
		type: String
	},
	description: {
		type: String,
	}
})

var description = mongoose.model('descriptions', descSchema);

//shuttleTrip.find({}).remove();

var count = 0;

//console.log(moment('12/01/2010').format())

csv().from.stream(fs.createReadStream(__dirname + '/descriptions.csv')).to.path(__dirname + '/seeddataout.csv').transform(function(row) {

	console.log(row[0])
	return row;
}).on('record', function(row, index) {

	var dataRecord = new description({
		ecoregion: row[0],
		communitycategory: row[1],
		community: row[2],
		description: row[3]
	})
	dataRecord.save(function(err) {

	})
}).on('end', function(count) {
	//console.log('Number of lines: ' + count);
}).on('error', function(error) {
	console.log(error.message);
});