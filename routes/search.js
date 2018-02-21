var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('search' , data);
};

exports.viewNL = function(req, res){
	console.log(data);
	res.render('searchNL' , data);
};