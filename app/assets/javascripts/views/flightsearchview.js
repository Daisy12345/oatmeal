var oatmeal = oatmeal || {};

oatmeal.FlightSearchView = Backbone.View.extend({
	el: '#user-search-page',
	 tagName: "tr",

	render: function(){
		// alert("hello");
	


		// this.$el.text(this.model.get('origin'));
		// this.$el.prependTo('.flight-list');
		// this.$el.text(this.model.get('destination'));
		// this.$el.prependTo('.flight-list');
 			k = searchFlights();
 			alert(k[1][3]);
     	  // this.$el.html("<td>" + k.('date') );
     	 // this.$el.appendTo('.flight-list');
     	
     	  this.$el.html( k);
     	  this.$el.appendTo('.result-list');


		// console.log("flights from flightlistview");
		// console.log(oatmeal.flights);
		// console.log("first from flightlistview");
		// console.log(oatmeal.flights.first());
		// console.log("flights from flightlistview");
		// console.log(oatmeal.flights);
		// this.$el.text("kkkkkkkkkk");


     // this.$el.html("<tr><td>" + this.model.get('origin') + "</td><td>"  + this.model.get('destination') + "</td><td>" + this.model.get('date') + "</td><td>" +  this.model.get('availableSeatsNumber') + "</td></tr>"

		
		
		// $( ".flight-list" ).after( "flight" );
	}
});