var oatmeal = oatmeal || {};

oatmeal.FlightView = Backbone.View.extend({
	el: '#flight-page',

	// textFieldSelector: '.secret-content input',

	// events: {
	// 	'submit .secret-form': 'onSubmit',
	// },

	initialize: function(collection) {
	this.listenTo(collection, 'add', function(flight){
		console.log("flightview init function");
		var view = new oatmeal.FlightListView({model: flight});
		view.render();
	});

	}
	// 	this.$(this.textFieldSelector).focus();
	// },

	// onSubmit: function(event) {
	// 	// don't do the normal form submit behaviour
	// 	event.preventDefault();

	// 	var $input = $(event.target).find(this.textFieldSelector);
	// 	var content = $input.val();
	// 	$input.val('').focus();
	// 	oatmeal.secrets.create({content: content});
	// }
});