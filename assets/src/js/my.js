$(function () {

    $(window).scroll(function () {
		var windowTop = $(window).scrollTop();
		windowTop >= 50 ? $('#heder').addClass('navSkrol') : $('nav').removeClass('navSkrol');
		

	});


});

