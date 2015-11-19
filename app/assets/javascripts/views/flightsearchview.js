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

     	 // this.$el.html("<td>" + this.model.get('date') + "</td><td>" + this.model.get('number') + "</td><td>" + this.model.get('origin') + ">"  + this.model.get('destination') + "</td><td>" + this.model.get('date') + "</td><td>" +  this.model.get('availableSeatsNumber') + "</td>");
     	 // this.$el.appendTo('.flight-list');

     	  this.$el.html( "ffffff");
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