var Marionette = require('backbone.marionette');


module.exports = AboutView =  Marionette.ItemView.extend({
	template: require('../../templates/about.hbs'),
    initialize: function() {
        //this.listenTo(this.collection, 'change', this.render);
    }
});
