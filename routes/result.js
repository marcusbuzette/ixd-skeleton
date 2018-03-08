var data = require('../data.json');
var globalList = new Array();
var nextList = new Array();


exports.view = function(req, res){
	var resultList = new Array();


	for (var i = data.places.length - 1; i >= 0; i--) {
		console.log(i);
		if(compareMood(req.query.mood,data.places[i].mood) || compareTask(req.query.task,data.places[i].task) ){
			resultList.push(data.places[i]) ;
			resultList[resultList.length-1].listIndex = resultList.length-1;

		}
		
	}
	globalList = resultList;
	nextList = globalList;
	nextList["logged"] = true;
	nextList["Alt"] = false;
	res.render('result', {output: nextList})

	
};

exports.viewAlt = function(req, res){
	var resultList = new Array();


	for (var i = data.places.length - 1; i >= 0; i--) {
		console.log(i);
		if(compareMood(req.query.mood,data.places[i].mood) || compareTask(req.query.task,data.places[i].task) ){
			resultList.push(data.places[i]) ;
			resultList[resultList.length-1].listIndex = resultList.length-1;

		}
		
	}
	globalList = resultList;
	nextList = globalList;
	nextList["logged"] = true;
	nextList["Alt"] = true;
	res.render('result', {output: nextList})

	
};

exports.viewNL = function(req, res){
	var resultList = new Array();


	for (var i = data.places.length - 1; i >= 0; i--) {
		console.log(i);
		if(compareMood(req.query.mood,data.places[i].mood) || compareTask(req.query.task,data.places[i].task) ){
			resultList.push(data.places[i]) ;
			resultList[resultList.length-1].listIndex = resultList.length-1;

		}
		
	}
	globalList = resultList;
	nextList = globalList;
	nextList["logged"] = false;
	nextList["Alt"] = false;
	res.render('result', {output: nextList})

	
};

exports.viewAltNL = function(req, res){
	var resultList = new Array();


	for (var i = data.places.length - 1; i >= 0; i--) {
		console.log(i);
		if(compareMood(req.query.mood,data.places[i].mood) || compareTask(req.query.task,data.places[i].task) ){
			resultList.push(data.places[i]) ;
			resultList[resultList.length-1].listIndex = resultList.length-1;

		}
		
	}
	globalList = resultList;
	nextList = globalList;
	nextList["logged"] = false;
	nextList["Alt"] = true;
	res.render('result', {output: nextList})

	
};

exports.next = function(req,res){
	
	if(nextList.length > 1){ // Move the object from the first place to last place on the array
		var aux = nextList.shift();
		nextList.push(aux);
	}else{
	}
	globalList["logged"] = true;
	res.render('result', {output: globalList})
}

exports.nextNL = function(req,res){
	
	if(nextList.length > 1){ // Move the object from the first place to last place on the array
		var aux = nextList.shift();
		nextList.push(aux);
	}else{
	}
	nextList["logged"] = false;
	res.render('result', {output: nextList})
}

exports.back = function(req,res){
	res.render('result', {output: nextList})
}

exports.search = function(req, res){
	var resultList = new Array();


	for (var i = data.places.length - 1; i >= 0; i--) {
		if(data.places[i].name.match(req.query.name) ){
			resultList.push(data.places[i]) ;
			resultList[resultList.length-1].listIndex = resultList.length-1;


		}
		
	}
	resultList["logged"] = true;
	res.render('searchList', {output: resultList})

	
};

exports.searchNL = function(req, res){
	var resultList = new Array();
	var search = req.query.name.toLowerCase();
	console.log(search);

	for (var i = data.places.length - 1; i >= 0; i--) {
		var place_name = data.places[i].name.toLowerCase();
		console.log(place_name);
		if(place_name.match(search) ){
			resultList.push(data.places[i]) ;
			resultList[resultList.length-1].listIndex = resultList.length-1;


		}
		
	}
	resultList["logged"] = false;
	res.render('searchList', {output: resultList})

	
};


function compareMood(mood,placeMoods){
	for (var i = placeMoods.length - 1; i >= 0; i--) {
		if (placeMoods[i] == mood) {
			return true;
		}

	}
	return false;
}

function compareTask(task,placeTasks){
	for (var i = placeTasks.length - 1; i >= 0; i--) {
		if (placeTasks[i] == task) {
			return true;
		}
	}
	return false;
}
