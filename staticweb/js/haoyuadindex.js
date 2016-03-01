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

});