$(document).ready(function(){
	//导航栏pading-left的宽度
	winwidth = $(window).width()/2
	
	if(winwidth - 420 < 0){
		winwidth = 0;
	}else{
		winwidth = winwidth - 420;
	}
	$('.nav').css('margin-left',winwidth);

	//轮播速度
	$('.carousel').carousel({
	  interval: 4000
	})

	winwidthall = $(window).width()-80;
	workwidth= winwidthall/5;
	
	$(".works_body li").css('width',workwidth);
	$(".works_body li").css('height',workwidth);

});