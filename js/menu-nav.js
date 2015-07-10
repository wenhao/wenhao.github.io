/* Mouse Leave */
$("#article-toc").mouseleave(function(){
	var articleNav = $('#article-toc-title div');
	articleNav.text('←');
	$("#article-toc").animate({right: "-165px"}, 200);
});

/* Mouse Enter*/
$("#article-toc").mouseenter(function() {
	var articleNav = $('#article-toc-title div');
	articleNav.text('→');
	$("#article-toc").animate({right: "0px"}, 200);
});