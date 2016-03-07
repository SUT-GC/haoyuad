$(document).ready(function(){
	windowwidth = $(window).width();

	case_each_width = windowwidth*0.8*0.77*0.3;
	case_each_height = case_each_width + 70;

	$(".each_case").css("width",case_each_width);
	$(".each_case").css("height",case_each_height);	

	$(".case_img").find("img").css("width",case_each_width-2);
	$(".case_img").find("img").css("height",case_each_width);

	// $(".case_infor").css("height",70);		


	// alert(case_eachimg_width)
});