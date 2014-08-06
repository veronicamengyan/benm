var Marionette = require('backbone.marionette');

module.exports = ContactsView =  Marionette.ItemView.extend({
    template: require('../../templates/contact.hbs'),
    initialize: function() {
        //this.listenTo(this.collection, 'change', this.render);
    }
});
