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
	res.render('resultNL', {output: nextList})

	
};

exports.next = function(req,res){
	
	if(nextList.length > 1){ // Move the object from the first place to last place on the array
		var aux = nextList.shift();
		nextList.push(aux);
	}else{
	}
	res.render('result', {output: nextList})
}

exports.nextNL = function(req,res){
	
	if(nextList.length > 1){ // Move the object from the first place to last place on the array
		var aux = nextList.shift();
		nextList.push(aux);
	}else{
	}
	res.render('resultNL', {output: nextList})
}

exports.back = function(req,res){
	res.render('result', {output: nextList})
}

exports.search = function(req, res){
	var resultList = new Array();


	for (var i = data.places.length - 1; i >= 0; i--) {
		if(data.places[i].name.match(req.query.name) ){
			console.log("MAAAATCH")
			resultList.push(data.places[i]) ;
			resultList[resultList.length-1].listIndex = resultList.length-1;


		}
		
	}
	console.log(resultList);
	res.render('searchList', {output: resultList})

	
};

exports.searchNL = function(req, res){
	var resultList = new Array();


	for (var i = data.places.length - 1; i >= 0; i--) {
		if(data.places[i].name.match(req.query.name) ){
			console.log("MAAAATCH")
			resultList.push(data.places[i]) ;
			resultList[resultList.length-1].listIndex = resultList.length-1;


		}
		
	}
	console.log(resultList);
	res.render('searchListNL', {output: resultList})

	
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
