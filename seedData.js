var mongoose = require("mongoose");
var _ = require('underscore')._;
var slug = require ('slug')
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


var plantSchema = new Schema({
	name: {
		name: String,
		slug:String,
	},
	ecoregion: {
		name: String,
		slug:String,
	},
	communitycategory: {
		name: String,
		slug:String,
	},
	community: {
		name: String,
		slug:String,
	},
	lifeform: {
		name: String,
		slug:String,
	},
	lifeformtype: {
		name: String,
		slug:String,
	},
	commonname: {
		type: String,
	},
	scientificname: {
		type: String,
	},
	link: {
		type: String,
	},
	color: {
		type: String,
	},
	dateCreated: {
		type: Date,
	},
	status: {
		type: Boolean,
	},
})

var plant = mongoose.model('plants', plantSchema);

//shuttleTrip.find({}).remove();

var count = 0;

//console.log(moment('12/01/2010').format())

csv().from.stream(fs.createReadStream(__dirname + '/seeddata.csv')).to.path(__dirname + '/sample.out').transform(function(row) {

	//console.log(row[0])
	return row;
}).on('record', function(row, index) {
	//console.log('#' + index + ' ' + JSON.stringify(row));
	console.log(row[5])
	var name = row[5] + " - " + row[6]
	if (row[5].length ==0){
		name = row[6]
	}
	var dataRecord = new plant({
	name: {
		name: name,
		slug:slug(name),
	},
	ecoregion:{
		name: row[0],
		slug:slug(row[0]),
	},
	communitycategory:{
		name: row[1],
		slug:slug(row[1]),
	},
	community:{
		name: row[2],
		slug:slug(row[2]),
	},
	lifeform:{
		name: row[3],
		slug:slug(row[3]),
	},
	lifeformtype:{
		name: row[4],
		slug:slug(row[4]),
	},
	commonname:row[5],
	scientificname:row[6],
	link:row[7],
	color:row[8],
	dateCreated:row[9],
	status: row[10]


	})
	count++;
	dataRecord.save(function(err) {
		if (count == 5) {
			mongoose.connection.close()

		}
	})
}).on('end', function(count) {
	//console.log('Number of lines: ' + count);
}).on('error', function(error) {
	console.log(error.message);
});
