var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require('./routes/')
var express = require('express');
var path = require('path');
var swig = require('swig');
swig.setDefaults({ cache: false });

var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile)

app.use(express.static(path.join(__dirname, 'node_modules')));	
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', function(req, res){
  res.render('index');
});
app.use('/products', routes);

app.listen(process.env.PORT, function() {
	console.log("Listening on " + process.env.PORT);
});

