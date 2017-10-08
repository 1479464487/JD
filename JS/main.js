//加载
$(document).ready(function() {
	function init() {
		//导航显示内容 鼠标经过显示地地址
		address("add");
		address("ul_rotate");
		address("ul_rotate_1");
		address("rotate_contents");

		nav_content("add","ul_ul"); 
		nav_content("ul_rotate","rotate_1");  //鼠标移动显示与隐藏内容
		nav_content("ul_rotate_1","rotate_2");
		nav_content("rotate_contents","rotate_3");  
		nav_content("rotate_content_1","rotate_4");  

		rotate($(".rotate_1"));  //旋转小图标
		rotate($(".rotate_2"));
		rotate($(".rotate_3"));
		//nums($(".shopping_sort"));//购物车的小圆圈

 		//轮播的图片
		lunbo($(".pictures"));
		setInterval(GetRTime,0);

		//鼠标经过图片上下浮动的效果
		img($(".img_text"));	
		box_list($(".left_2"),$(".right_2"));
		findImg($(".box_item"),$(".box_hd_rec_img"),$(".shopping_con"),$(".share_center_div"),$(".share_center_item2_imgs"),$(".box_hd_cloth_content1"),$(".cloth_content2_img"),$(".box_hd_cloth_content5_1"));
		shadow();
		// erMa($(".box_hd_cloth_top"));
		erMa($(".cloth_imgs"));
		block($(".content_left_li"));
		displayList();
		window.onscroll = function(){
			display_sousuo();
			display_tool();
		}
		toolDis($(".right_tool_con_child"),$(".right_tool_footer_child"));
	}
	init();
});