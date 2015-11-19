var oatmeal = oatmeal || {};

oatmeal.FlightListView = Backbone.View.extend({
	tagName: "li",

	render: function(){
		console.log("flight list view render")

		this.$el.text(this.model.get('origin'));
		this.$el.prependTo('.flight-list');
		this.$el.text(this.model.get('destination'));
		this.$el.prependTo('.flight-list');

     this.$el.html( this.model.get('origin')  + this.model.get('destination') + this.model.get('date') + '<br> '+ this.model.get('availableSeatsNumber'));
     		this.$el.prependTo('.flight-list');
		// console.log("flights from flightlistview");
		// console.log(oatmeal.flights);
		// console.log("first from flightlistview");
		// console.log(oatmeal.flights.first());
		// console.log("flights from flightlistview");
		// console.log(oatmeal.flights);
		// this.$el.text("kkkkkkkkkk");


		
		
		// $( ".flight-list" ).after( "flight" );
	}
});