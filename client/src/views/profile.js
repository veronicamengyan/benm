var Marionette = require('backbone.marionette');


module.exports = ProfileView =  Marionette.ItemView.extend({
	template: require('../../templates/profile.hbs'),
    initialize: function() {
        //this.listenTo(this.collection, 'change', this.render);
    }
});
