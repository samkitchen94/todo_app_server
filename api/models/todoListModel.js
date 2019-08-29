
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  completed: {
    type: [{
      type: Boolean,
      default: false
    }],
  }
});

module.exports = mongoose.model('Todos', TodoSchema);