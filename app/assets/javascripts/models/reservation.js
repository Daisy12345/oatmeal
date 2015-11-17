var oatmeal = oatmeal || {};

oatmeal.Reservation = Backbone.Model.extend({
	urlRoot: "/reservations",

	defaults: {

	},

	initialize: function() {
		this.on("all", function(event){
			console.log("reservation init");
			console.log(event);
		} );
	}


});