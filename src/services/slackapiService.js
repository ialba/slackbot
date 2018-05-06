'use strict';

var rp = require('request-promise');

var baseUrl = "https://slack.com/api/";
var bearerToken = "xoxb-360117328247-Qih5XOHejaO1AhacMNn750g5";
var accessToken = "xoxb-360117328247-Qih5XOHejaO1AhacMNn750g5";

exports.sendMessage = function(message, userId) {
  let action = "chat.postMessage";
  var options = {
      method: 'POST',
      uri: baseUrl + action,
      body: {
          channel: userId,
          text : message
      },
      headers: {
          'Authorization' : 'Bearer '+bearerToken
      },
      json: true // Automatically parses the JSON string in the response
  };
  console.log(options);
  rp(options)
    .then(function (repos) {
        console.log( repos);
    })
    .catch(function (err) {
        // API call failed...
        console.error(err);
    });
};
