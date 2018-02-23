var data = require('../data.json');

exports.view = function(req, res){
	data["logged"] = true;
	console.log(data);
	res.render('navigation' , data);
};

exports.viewNL = function(req, res){
	data["logged"] = false;
	console.log(data);
	res.render('navigation' , data);
};