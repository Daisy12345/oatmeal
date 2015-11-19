var oatmeal = oatmeal || {};

oatmeal.FlightListView = Backbone.View.extend({
	tagName: "tr",

	render: function(){
		console.log("flight list view render")

		// this.$el.text(this.model.get('origin'));
		// this.$el.prependTo('.flight-list');
		// this.$el.text(this.model.get('destination'));
		// this.$el.prependTo('.flight-list');

     this.$el.html("<td>" + this.model.get('date') + "</td><td>" + this.model.get('number') + "</td><td>" + this.model.get('origin') + ">"  + this.model.get('destination') + "</td><td>" + this.model.get('date') + "</td><td>" +  this.model.get('availableSeatsNumber') + "</td>");
     		this.$el.appendTo('.flight-list');
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