var methodOverride = require('method-override');
var express = require('express');
var products = require('../product.model.js');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded());


router.get('/', function(req, res, next) {
	var allProducts = products.list();
	console.log("Welcome the inventoryApp homepage!");
	res.render('index', {title: "Inventory", inventory: allProducts, showForm: true});
});

router.get('/products/add', function(req, res) {
	products.add
	res.render('add', {title: "Add"});
});

router.get('/products/:id', function(req, res, next) {
	var allProducts = products.list();
	console.log("Welcome the inventoryApp homepage!");
	res.render('index', {title: "Inventory", inventory: allProducts, showForm: true});
});

router.delete('/trash/:id', function(req, res, next) {
	var filteredProducts = products.delete(Number(req.params.id));
	res.render('index', {title: "Inventory", inventory: filteredProducts, showForm: true});
});

router.post('/products/add', function(req, res, next) {
	products.add(req.body.name);
	res.redirect('/');
});

router.get('/products/:id/edit', function(req, res, next) {
	var productToUpdate = products.find(Number(req.params.id));
	res.render('edit', {title: "Update", product: productToUpdate[0]});
});

router.put('/products/:id', function(req, res, next) {
	products.update(req.body.name, Number(req.params.id))
	res.redirect('/');
});

module.exports = router;

