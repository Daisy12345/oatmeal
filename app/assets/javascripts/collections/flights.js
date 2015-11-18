var oatmeal = oatmeal || {};

oatmeal.Flights = Backbone.Collection.extend({
	url: "flights",
	model: oatmeal.Flight
});

var flight = new oatmeal.Flight();
