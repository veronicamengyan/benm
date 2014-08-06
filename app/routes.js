var home = require('../controllers/home'),
    contacts = require('../controllers/contacts');

module.exports.initialize = function(app) {
    app.get('/', home.index);
};
