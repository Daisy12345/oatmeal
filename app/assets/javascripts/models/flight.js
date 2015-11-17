var oatmeal = oatmeal || {};

oatmeal.Flight = Backbone.Model.extend({
	urlRoot: "/flights",

	defaults: {

	},

	initialize: function() {
		this.on("all", function(event){
			console.log("flight init");
			console.log(event);
		} );
	}


});