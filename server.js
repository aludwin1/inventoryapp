var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require('./routes/')
var express = require('express');
var path = require('path');
var swig = require('swig');
var app = express();

app.set('view engine', 'html');
app.engine('html', swig.renderFile)
swig.setDefaults({ cache: false });

app.use(express.static(path.join(__dirname, 'node_modules')));	
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/', routes);

app.listen(process.env.PORT, function() {
	console.log("Listening on " + process.env.PORT);
});

