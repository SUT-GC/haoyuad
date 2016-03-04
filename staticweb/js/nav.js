$(document).ready(function(){
	windowwight = $(window).width();
	$(".wangzhan_headlogo").css("width",windowwight);
	
	//导航栏pading-left的宽度
	winwidth = $(window).width()/2
	
	if(winwidth - 420 < 0){
		winwidth = 0;
	}else{
		winwidth = winwidth - 420;
	}
	$('.nav').css('margin-left',winwidth);

});