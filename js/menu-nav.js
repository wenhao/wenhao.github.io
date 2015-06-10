/*
(function($, scrollSpeed, hiddenSpeed, fadeSpeed) {
	$('.toc-link').click(function(e) {
		//阻止默认跳转
		e.preventDefault();
		//定义滚动动画
		var scrollTarget = $('#' + $(this).children('.toc-text').first().text());
		$("html,body").animate({
			scrollTop: scrollTarget.prev().offset().top
		}, scrollSpeed);
	});
	
	$("#title-nav").click(function(){
		var menuNav=$("#menu-nav").css("right");
		if (menuNav=='0px'){
			$("#menu-nav").animate({right: "-165px"}, 200);
		} else {
			$("#menu-nav").animate({right: "0px"}, 200);
		}
	});
})(jQuery, 500, 200, 100);
*/


(function($, scrollSpeed, hiddenSpeed, fadeSpeed) {
	var T = $('#toc');
	var M = $('#menu-nav');
	var C = $('#content-nav');
	var Tx = T.position().top;
	$(window).scroll(function() {
		var top = $(this).scrollTop();
		if (top >= Tx + 300) {
			M.stop().fadeIn(fadeSpeed);
			T.stop().fadeTo(fadeSpeed, 0);
		} else {
			M.stop().fadeOut(fadeSpeed);
			T.stop().fadeTo(fadeSpeed, 1);
		}
	});
	$('.toc-link').click(function(e) {
		//阻止默认跳转
		e.preventDefault();
		//定义滚动动画
		var scrollTarget = $('#' + $(this).children('.toc-text').first().text());
		$("html,body").animate({
			scrollTop: scrollTarget.prev().offset().top
		}, scrollSpeed);
	});
	C.click(function(e) {
		e.stopPropagation();
	});
	M.click(function() {
		C.toggle(hiddenSpeed, 'linear', function() {
			var T = $('#title-nav div');
			T.text() == '←' ? T.text('→') : T.text('←');
		});
	});
})(jQuery, 500, 200, 100);