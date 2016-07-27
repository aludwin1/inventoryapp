var express = require('express');
var Product = require('../product.model.js');
var router = express.Router();



router.get('/', function(req, res, next) {
	res.render('products', {title: "Inventory", inventory: Product.list()});
});

router.get('/add', function(req, res) {
	res.render('add', {title: "Add"});
});

router.delete('/:id', function(req, res, next) {
	Product.delete(Number(req.params.id));
  res.redirect('/products');
});

router.post('/', function(req, res, next) {
	Product.add(req.body.name);
	res.redirect('/products');
});

router.get('/:id/edit', function(req, res, next) {
	var product = Product.find(Number(req.params.id));
	res.render('edit', {title: "Update", product: product});
});

router.put('/:id', function(req, res, next) {
	Product.update(Number(req.params.id), req.body.name)
	res.redirect('/products');
});

module.exports = router;

