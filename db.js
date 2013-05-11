var mongoose = require("mongoose");

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

exports.Plant = mongoose.model('plants', plantSchema);