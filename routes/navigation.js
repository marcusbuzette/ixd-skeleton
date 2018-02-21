var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('navigation' , data);
};

exports.viewNL = function(req, res){
	console.log(data);
	res.render('navigationNL' , data);
};