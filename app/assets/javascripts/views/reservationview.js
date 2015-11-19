var oatmeal = oatmeal || {};

oatmeal.ReservationView = Backbone.View.extend({
	el: '#reservation-page',

	events: {
		'submit .reservation-form': 'onSubmit',
	},

	initialize: function(collection) {
		this.listenTo(collection, 'add', function(flight){
			console.log("flightview init function");
		});

		this.model.bind('change:oatmeal', this.render, this);
	},
	onSubmit: function(event) {

		// don't do the normal form submit behaviour
		event.preventDefault();

		var reservationInfo = ({
            flight_id: this.$('input[name=flightnum]').val(),
            seat: this.$('input[name=seatInput]').val(),
            user_id: this.$('input[name=usernum]').val()
        });
		console.log(reservationInfo);
		oatmeal.reservations.create(reservationInfo);
	}
});