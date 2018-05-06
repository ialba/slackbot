'use strict';


var mongoose = require('mongoose'),
  employeeScm = mongoose.model('employee'),
  taskScm = mongoose.model('tasks'),
  apiService = require('../services/slackapiService');




exports.registerEvent = function(req, res) {
  let type = req.body.type;

  switch(type){
    case "url_verification":
      url_verification(req, res);
      break;
    case "event_callback":
      event_callback(req, res);
      break;
  }
  if(!type) trashfunc(req, res);
};


function url_verification(req, res){
  if(type == "url_verification"){
    let respuesta = {
      "challenge" : req.body.challenge
    };
    res.send(respuesta);
  }
}

function event_callback(req, res){
  let objEvent = req.body.event;
  let sEventType = objEvent.type;

  if(sEventType == "message"){
    console.log("New Message");
    // Lets process the msg
    if(objEvent.text.indexOf("-") != -1){
      var spltMessage = objEvent.text.split("-");
      var query = employeeScm.where({ slackId : objEvent.channel });
      query.findOne((err, user )=>{
        if (err) console.error(err);
        var newTask = new taskScm({
          user : user.user,
          description : spltMessage[1].trim(),
          type : spltMessage[0]
        });
        newTask.save().then((err, task )=>{
          if (err) console.error(err);
          console.log("Saved properly");
        });
      })



    }else{
      apiService.sendMessage(`Wrong format: <1,2,3> - Text`, objEvent.channel);
    }
  }
}
