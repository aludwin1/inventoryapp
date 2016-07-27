var _products = [ 
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
		return _products;
	},

	find: function(id) {
		return this.list().filter(function(product) {
			return product.id === id;
		})[0];
	},

	delete: function(id) {
    var product = this.find(id); 
    var idx = this.list().indexOf(product);
    this.list().splice(idx, 1);
	},

	add: function(name) {
    var max = 0;
    max = this.list().reduce(function(max, product){
      if(product.id > max)
        max = product.id;
      return max;
    }, 0);
    max++;
    var product = {
      name: name,
      id: max
    };
		this.list().push(product);
	},

	update: function(id, name) {
    this.find(id).name = name;
	}

};
