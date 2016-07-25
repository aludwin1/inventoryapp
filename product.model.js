var products = [ 
	{
		name: "Something",
		id: 1
	},

	{
		name: "Another thing",
		id: 2
	},

	{
		name: "And another thing",
		id: 3
	}
];


module.exports = {
	list: function() {
		return products;
	},

	find: function(id) {
		return products.filter(function(obj) {
			return obj.id === id
		});
	},

	delete: function(id) {

		products = products.filter(function(obj) {
			return obj.id !== id
		});
		
		return this.list();
	},

	add: function(name) {
		products.push({id: products.length + 1, name: name})
	},

	update: function(name, value) {
		for(var i = 0; i < products.length; i++) {
			if(products[i].id === value) {
				products[i].name = name;
			}
	    }
	}

};
