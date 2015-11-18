var oatmeal = oatmeal || {};

oatmeal.Flight = Backbone.Model.extend({
	urlRoot: "/flights",

	defaults: {
		number: "1111",
		origin: "SYD",
		destination: "LAX",
		date: "5/5/2015",
	},

	initialize: function() {
		this.on("all", function(event){
			console.log("flight init");
			console.log(event);
		} );
	}


});