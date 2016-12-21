var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(function (req, res, next) {
	if(req.headers['x-forwarded-proto'] === 'http'){
		next();
	}else {
		res.redirect('http://'+req.hostname + req.url);
	}
});

app.use(express.static('public'));

app.listen(3000, function () {

	console.log('server is start from port 3000');

})
