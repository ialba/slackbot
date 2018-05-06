'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmployeesSchema = new Schema({
  user: {
    type: String,
    required: 'Person on the task'
  },
  slackId: {
    type: String
  }
});

module.exports = mongoose.model('employee', EmployeesSchema);
