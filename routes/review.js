var data = require("../data.json");

exports.addReview= function(req, res) {    
	

	var review = req.query.name;
	console.log(review);

	data["places".description].push(review);
	res.render('place',data);

	
 }