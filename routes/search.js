var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	data["logged"] = true;
	res.render('search' , data);
};

exports.viewNL = function(req, res){
	console.log(data);
	data["logged"] = false;
	res.render('search' , data);
};