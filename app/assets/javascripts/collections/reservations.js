var oatmeal = oatmeal || {};

oatmeal.Reservations = Backbone.Collection.extend({
	url: "reservations",
	model: oatmeal.Reservation
});

