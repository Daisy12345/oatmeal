var oatmeal = oatmeal || {};

oatmeal.FlightListView = Backbone.View.extend({
	tagName: "li",

	render: function(){
		console.log("flight list view render")

		this.$el.text(this.model.get('origin'));
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