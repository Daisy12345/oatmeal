var oatmeal = oatmeal || {};

oatmeal.FlightView = Backbone.View.extend({
	el: '#flight-page',

	// textFieldSelector: '.secret-content input',

	events: {
		'submit .flight-form': 'onSubmit',
	},

	initialize: function(collection) {
		this.listenTo(collection, 'add', function(flight){
			console.log("flightview init function");
			var view = new oatmeal.FlightListView({model: flight});
			view.render();
		});

	},
	// 	this.$(this.textFieldSelector).focus();
	// },

	onSubmit: function(event) {
		// don't do the normal form submit behaviour
		event.preventDefault();

		var flightInfo = ({
            number: this.$('input[name=number]').val(),
            date: this.$('input[name=date]').val(),
            destination: this.$('input[name=to]').val(),
            origin: this.$('input[name=from]').val(),
            plane_id: this.$('input[name=plane]').val()
        });

		console.log(flightInfo);
		var newFlight = new oatmeal.Flight;
		newFlight.set(flightInfo);
		console.log(newFlight);

		oatmeal.flights.create(flightInfo);
		// var $input = $(event.target).find(this.textFieldSelector);
		// var content = $input.val();
		// $input.val('').focus();
		// oatmeal.secrets.create({content: content});
	}
});