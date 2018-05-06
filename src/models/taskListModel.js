'use strict';
var mongoose = require('mongoose'),
  employeeScm = mongoose.model('employee');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  user: {
    type: String,
    required : 'You need to specify an user'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: 'Commentary'
  },
  type: {
    type: String
  }
});

module.exports = mongoose.model('tasks', TaskSchema);
