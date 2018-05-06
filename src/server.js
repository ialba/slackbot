'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  employee = require('./models/employeesModel'), //created model loading here
  taskList = require('./models/taskListModel'), //created model loading here
  bodyParser = require('body-parser');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/standup');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/eventsRoutes'); //importing route
routes(app); //register the route

var cronTasks = require('./controllers/cronTasksController')




app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
