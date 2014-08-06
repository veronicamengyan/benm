var Marionette = require('backbone.marionette');

module.exports = Router = Marionette.AppRouter.extend({
    appRoutes: {
        ''  : 'about',
        'contact' : 'contact',
        'profile':'profile'
    }
});
