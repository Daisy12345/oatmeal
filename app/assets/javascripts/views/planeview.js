var oatmeal = oatmeal || {};

oatmeal.PlaneView = Backbone.View.extend({
	el: '#plane-page',


	events: {
		'submit .plane-form': 'onSubmit',
	},

	initialize: function(collection) {
		this.listenTo(collection, 'add', function(plane){
			console.log("planeview init function");
			// var view = new oatmeal.PlaneListView({model: plane});
			// view.render();

		});
		this.model.bind('change:oatmeal', this.render, this);
	},
	onSubmit: function(event) {
		// alert("onSubmit clicked");
		// don't do the normal form submit behaviour
		event.preventDefault();
		// alert(this.$('input[name=rows]').val())
		var planeInfo = ({
            name: this.$('input[name=name]').val(),
            rows: this.$('input[name=rows]').val(),
            columns: this.$('input[name=columns]').val()
        });
        console.log(planeInfo);
        var newPlane = new oatmeal.Plane;
        newPlane.set(planeInfo);
        console.log(newPlane);

        oatmeal.planes.create(planeInfo);


        // this.collection.create(planeInfo);


		// var $input = $(event.target).find(this.textFieldSelector);
		// var content = $input.val();
 		// $input.val('').focus();
		// app.secrets.create({content: content});
	}
});