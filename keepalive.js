var request = require('request');

request('http://naturalcommunitiesofga.herokuapp.com', function (e,res,body){
	console.log(body)
});
