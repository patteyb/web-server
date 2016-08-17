var express = require('express');
var app = express();

// Either the port will be a port on the server
// or my local port of 3000
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');


// calling middleware in a app.use will cause it to be applied
// to all the routes. Calling it in the app.get for a specific
// route (as the second argument: middleware.authentication) will
// cause it to applied only on that route
app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// Setting up routes
app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res) {
    res.send('About us!');
});

// An example of how to set up middleware on just one route
//app.get('/about', middleware.requireAuthentication, function(req, res) {
//    res.send('About us!');
//});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express server started at port ' + PORT + '...');
});