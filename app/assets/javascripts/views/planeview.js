var oatmeal = oatmeal || {};

oatmeal.PlaneView = Backbone.View.extend({
	el: '#plane-page',

	initialize: function(collection) {
	this.listenTo(collection, 'add', function(plane){
		console.log("planeview init function");
		var view = new oatmeal.PlaneListView({model: plane});
		view.render();
	});

	}
});