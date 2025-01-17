'use strict';

var Schema = require('mongoose').Schema;
var postScheme = new Schema({
  userID: {
    type : String,
    required : true
  },
  userIDTo: {
    type : String
  },
  privacy: {
    type : Number,
    required : true
  },
  post: {
    type : String,
    required : true
  },
  edited: Array,
  posted: Number
}, { versionKey: false });

exports.model = require('mongoose').model('Post', postScheme);
