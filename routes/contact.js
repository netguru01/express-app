var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/send', function (req, res, next) {
	// body...
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'amostvee@gmail.com',
			pass: 'Success12#'
		}
	});
	var mailOptions = {
		from: 'Amos TV <amostvee@gmail.com>',
		to: 'slankeyinc@gmail.com',
		subject: 'Contact Us Form Submission',
		text: 'You got a new contact form filled with the following details... Name: ' + req.body.name + ' Email ' + req.body.email + ' Message ' + req.body.message,
		html: '<p>You got a new contact form filled with the following details...<p><ul><li>Name ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
	};
	transporter.sendMail(mailOptions, function(error, info) {
		// body...
		if (error) {
			console.log(error);
			res.redirect('/');
		}
		else {
			console.log('Message Sent: ' + info.response);
			res.redirect('/')
		}
	});
});

module.exports = router;
