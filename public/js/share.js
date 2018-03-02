$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
	$('#shareNotice').click(projectClick);
}


function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    console.log("before");
    var e = document.getElementById("friendName");
	var strUser = e.options[e.selectedIndex].text;
  	 alert(' Do you want to share this palce with your friend ' + strUser +' ?');
    
  	console.log("afters");

  }

