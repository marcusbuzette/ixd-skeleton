var data = require('../data.json');


exports.view = function(req, res){
	var resultList = new Array();
	
	for (var i = data.places.length - 1; i >= 0; i--) {
		if(data.places[i].mood == req.query.mood || data.places[i].task == req.query.task ){
			console.log(data.places[i].name);
			resultList.push(data.places[i]) ;
		}
		
	}
	console.log(resultList);

	res.render('result' , {output: resultList});
};
