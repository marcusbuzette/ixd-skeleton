$(function(){
	$('.resultBtn').click(function(e){
		e.preventDefault();
		ga('create', 'UA-114618844-1','auto');
		ga('send', 'event', 'NoB', 'click');
		window.location.href = $(this).attr('href');
	})
})

