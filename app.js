
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api');

var app = module.exports = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// JSON API
app.get('/api/ecoregion', api.ecoregion)
app.get('/api/getone/:ecoregion', api.getone)
app.get('/api/getone/:ecoregion/:communitycategory', api.getone)
app.get('/api/getone/:ecoregion/:communitycategory/:community', api.getone)
app.get('/api/ecoregion/:ecoregion/communitycategory', api.communitycategory)
app.get('/api/ecoregion/:ecoregion/communitycategory/:communitycategory', api.communityname)
app.get('/api/ecoregion/:ecoregion/communitycategory/:communitycategory/community/:community', api.species)
app.get('/api/ecoregion/:ecoregion/communitycategory/:communitycategory/community/:community/record/:record', api.record)


// Routes
app.get('/', routes.index);
app.get('/:ecoregion', routes.communitycategory)
app.get('/:ecoregion/:category', routes.community )
app.get('/:ecoregion/:category/:community', routes.species)
app.get('/:ecoregion/:category/:community/:record', routes.record )



app.get('*', routes.index);

// Start server

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

