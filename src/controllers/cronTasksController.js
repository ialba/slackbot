'use strict';


var schedule = require('node-schedule'),
    apiService = require('../services/slackapiService'),
    mongoose = require('mongoose'),
    employeeScm = mongoose.model('employee');

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 9;
rule.minute = 30;


var j = schedule.scheduleJob('15 * * * *', function(){
  employeeScm.find((err, employees) => {
    if (err) return console.error(err);
    employees.forEach((employee) => {
      apiService.sendMessage(`
        Hello ${ employee.user }
      1- Yesterday, what did you get done?
      2- Today, what will you get done?
      2- How can the team help you?
      To answer write: 1- <answer>...`, employee.slackId);
    });
  });
});
