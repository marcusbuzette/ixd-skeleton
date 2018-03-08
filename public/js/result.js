$(function(){
	$('.resultBtn').click(function(e){
		e.preventDefault();
		ga('create', 'UA-114618844-1','auto');
		ga('send', 'event', 'NoB', 'click');
		$('.resultBtn').attr('href','/result_next_not_logged_in')
		console.log("teste");
		window.location.href = $(this).attr('href');
	})
})

