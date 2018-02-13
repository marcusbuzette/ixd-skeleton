var data = require('../data.json');

exports.view = function(req, res){
	console.log(req.params.placeId);
	var place = findPlace(req.params.placeId)
	console.log(place);
	res.render('place' , {placeToShow: place});
};

function findPlace(id){
	for (var i = data.places.length - 1; i >= 0; i--) {
		if(data.places[i].placeId == id){
			return data.places[i];
		}
	}
}