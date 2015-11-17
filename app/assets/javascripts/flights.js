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
	oatmeal.flights = new oatmeal.Flights();
	oatmeal.view = new oatmeal.AppView(oatmeal.flights);

	oatmeal.flights.fetch({
		success: function() {
						console.log('**success loading init');

			// Poll the server for new secrets every 4 seconds.
			setInterval(function () {
				app.flights.fetch();
			}, 4000); // 4 seconds
		},
		error: function() {
			console.log('error loading flights');
		}
	});
};