var data = require('../data.json');
var favorites = new Array();

exports.view = function(req, res){
	favorites = data.favorites;
	res.render('favorites' , {output: favorites});
};

