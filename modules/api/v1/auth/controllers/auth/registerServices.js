'use strict';
var User = require('../../models/userModel'),
		config = require('../../../../../../config/config');
exports.register = function(req, res) {
	var user = new User.model({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		salt: req.body.salt,
		birthdate: req.body.birthdate,
		profilePicture: null,
		privacy: {
			profile: 0,
			posts: 0
		},
		customURL: null,
		customPreferences: {
			theme: "standard"
		},
		admin: false,
		created: new Date()
	});

	user.save(function(err, test) {
		if ( err && err.code !== 11000 ) {
    		console.log(err);
    		console.log(err.code);
    		res.send('Another error showed up');
    		return;
  		}

			res.json({
					success: 1,
					token: require('jsonwebtoken').sign({ /*exp: Math.floor(Date.now() / 1000) + (60*60),*/userID: test._id, admin: test.admin }, config.jwtSecret)
				});
	});
}