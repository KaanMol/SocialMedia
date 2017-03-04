'use strict';

var Schema = require('mongoose').Schema,
		userScheme = new Schema({
	firstName: {
  		type : String,
  		required : true
  	},
  	lastName: {
  		type : String,
  		required : true
  	},
		profilePicture: {
			type: String
		},
		salt: {
			type: String,
			required: true
		},
  	username: {
  		type : String,
  		unique : true,
  		required : true
  	},
	  password: {
		  type : String,
		  required : true,
		  select: false
	  },
	  email: {
  		type : String,
  		unique : true,
  		required : true
  	},
  	birthdate: {
  		type : String,
  		required : true
  	},
		privacy: {
  		type : Object,
  		required : true
  	},
  	customURL: {
  		type : String
  	},
  	customPreferences: {
  		type : Object
  	},
		security: {
			type : Object,
			select: false
		},
	admin: Boolean,
	created: Date
});


exports.model = require('mongoose').model('User', userScheme);