'use strict';
module.exports = function(app) {
  var events = require('../controllers/eventsController');

  // todoList Routes
  app.route('/event-listener')
    .get(events.registerEvent)
    .post(events.registerEvent)

};
