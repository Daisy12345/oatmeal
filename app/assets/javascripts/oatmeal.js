// Configure Underscore template system so that it doesn't use the same
// syntax as ERB template system.

// {[ console.log("Hello"); ]} - runs code (for if statements, loops etc.)
// {{ key }} - interpolates
 _.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,
    interpolate : /\{\{([\s\S]+?)\}\}/g
};


var oatmeal = oatmeal || {};

oatmeal.init = function() {
	oatmeal.planes = new oatmeal.Planes();
	oatmeal.flights = new oatmeal.Flights();
	oatmeal.reservations = new oatmeal.Reservations();
	oatmeal.flightview = new oatmeal.FlightView(oatmeal.flights);
	oatmeal.planeview = new oatmeal.PlaneView(oatmeal.flights);


	oatmeal.reservation = new oatmeal.Reservations();
	oatmeal.reservationview = new oatmeal.ReservationView(oatmeal.reservation);
	oatmeal.flightsearchview = new oatmeal.FlightSearchView();
	// oatmeal.view = new oatmeal.AppView(oatmeal.flights);

	oatmeal.flights.fetch({
		success: function() {
						console.log('**success loading init');

			// Poll the server for new secrets every 4 seconds.
			setInterval(function () {
				console.log('poll server again');
				oatmeal.flights.fetch();
				console.log(oatmeal.flights);
			}, 100); 
		},
		error: function() {
			console.log('error loading flights');
		}
	});


};

	var searchFlights = function(){
          var foundFlights = oatmeal.flights.where({origin: "SYD"});
          console.log(foundFlights);
          return foundFlights;
	}