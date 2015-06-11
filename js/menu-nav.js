/* Mouse Leave */
$("#article-nav").mouseleave(function(){
	var articleNav = $('#article-nav-title div');
	articleNav.text('←');
	$("#article-nav").animate({right: "-165px"}, 200);
});

/* Mouse Enter */
$("#article-nav").mouseenter(function() {
	var articleNav = $('#article-nav-title div');
	articleNav.text('→');
	$("#article-nav").animate({right: "0px"}, 200);
});