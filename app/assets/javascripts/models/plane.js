var oatmeal = oatmeal || {};

oatmeal.Plane = Backbone.Model.extend({
	urlRoot: "/planes",

	defaults: {
		name: "A380",
		rows: "40",
		columns: "10",
	},

	initialize: function() {
		this.on("all", function(event){
			console.log("plane init");
			console.log(event);
		} );
	}


});