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

	$(".nav").find("a").click(function(){
		name = this.text;
		if(name=="网站首页"){
			window.location.href="index.html"
		}
		if(name=="工作流程"){
			window.location.href="workflow.html"
		}
		if(name=="公司简介"){

		}
		if(name=="经典案例"){

		}
		if(name=="主创团队"){

		}
		if(name=="招兵买马"){

		}
		if(name=="联系我们"){

		}
	});

});