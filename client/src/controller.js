var Marionette = require('backbone.marionette'),
    AboutView = require('./views/about'),
    ProfileView = require('./views/profile'),
    ContactsView = require('./views/contacts');

module.exports = Controller = Marionette.Controller.extend({
    initialize: function() {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
    },


    about: function() {
        App.core.vent.trigger('app:log', 'Controller: "About" route hit.');
        var view = new AboutView();
        this.renderView(view);
    },
    profile: function() {
        App.core.vent.trigger('app:log', 'Controller: "About" route hit.');
        var view = new ProfileView();
        this.renderView(view);
    },
    contact: function() {
        App.core.vent.trigger('app:log', 'Controller: "Contact" route hit.');
        var view = new ContactsView();
        this.renderView(view);
    },

    renderView: function(view) {
        this.destroyCurrentView(view);
        App.core.vent.trigger('app:log', 'Controller: Rendering new view.');
        $('#js-boilerplate-app').html(view.render().el);
    },

    destroyCurrentView: function(view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    }
});
