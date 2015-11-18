var oatmeal = oatmeal || {};

oatmeal.Planes = Backbone.Collection.extend({
	url: "planes",
	model: oatmeal.Plane
});

var plane = new oatmeal.Plane();
