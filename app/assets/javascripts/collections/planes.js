var oatmeal = oatmeal || {};

oatmeal.Planes = Backbone.Collection.extend({
	url: "planes",
	model: oatmeal.Plane
});

var plane = new oatmeal.Plane();
var plane1 = new oatmeal.Plane({name: "Daisy", rows: 5, columns: 12});
var plane2 = new oatmeal.Plane();