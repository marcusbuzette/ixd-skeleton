'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#unfa").click(function(e) {
			var condition = $('#unfa').text();

	    if (condition.length==8) {
	    	
	    	$("#unfa").text("UNFAVORITE");
	    }
	    else{
	    	
	    	$("#unfa").text("FAVORITE");
	    }

	    
});
	$("#review").click(addReview);
	    

}
function addReview(e) { 
        
    e.preventDefault();


	    var input = $('<input type="text" class="form-control" id="name" placeholder="Name" name="name">');
	    
	    $("#review").append(input);
	    //$(".form-control").remove();

};

