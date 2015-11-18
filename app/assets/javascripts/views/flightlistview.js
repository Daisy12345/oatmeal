var oatmeal = oatmeal || {};

oatmeal.FlightListView = Backbone.View.extend({
	tagName: "li",

	render: function(){
		console.log("flight list view render")

		// this.$el.text(this.model.get('number'));
		this.$el.text(oatmeal.flights.first.number);


		
		this.$el.prependTo('.flight-list');
		$( ".flight-list" ).after( "flight" );
	}
});