'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#NoB").click(projectClick);
		
}


function projectClick(e){
	console.log("java")
	e.preventDefault();
	ga('create', 'UA-115102424-1','auto')
	ga('send', 'event', 'No', 'click');
}