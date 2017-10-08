
//鼠标经过显示地地址
function address(str) {
	var address_1 = [ "北京","上海","天津","重庆","河北",
					"山西","河南","辽宁","吉林","黑龙江",
					"内蒙古","江苏","山东","安徽","浙江",
					"福建","湖北","湖南","广东","云南",
					"江西","四川","海南","贵州","河北",
					"西藏","陕西","甘肃","青海","宁夏",
					"新疆","港澳","台湾","钓鱼岛","海外"
				  ];

	var address_2 = [ "待处理订单","消息",
					"修改退换货","我的问答",
					"降价商品","我的关注",
					"我的京东","我的优惠券",
					"我的白条","我的理财"
				  ];

	var address_3 = [ "客户",
					"帮助中心","售后服务",
					"在线客服","意见建议",
					"电话客服","客服邮箱",
					"金融咨询",
					"商户",
					"合作招商","京东商学院",
				  ];
	var address_4 = [ "特色主题","行业频道","生活服务","更多精选",
					"品牌头条","发现好货","京东预售","尖er货","服装城","家用电器","电脑办公","京东众筹","白条","京东金融App","京东社区","京东通信","在线读书",
					"京东试用","港澳售","优惠劵","闪购","手机","美妆馆","食品","京东小金库","理财","话费","京东E卡","智能社区","游戏社区",
					"京东会员","秒杀","定期送","装机大师","智能数码","母婴","家装城","旅行","彩票","游戏","京友邦","合作招商","企业采购",
					"新奇特","企业经融服务","礼品购","智能馆","运动户外","整车","图书","机票酒店","电影票","水电煤","服务市场","乡村招募","校园加盟",
					"0元评测","In货推荐","北京老字号","买什么","农资频道","京东智能","玩3C","京东到家","京东微联","京东众测","办公生活馆","知识产权维权","English Site",
				  ];
	var arr = [];
	arr['add'] = address_1;
	arr['ul_rotate'] = address_2;
	arr["ul_rotate_1"] = address_3;
	arr["rotate_contents"] = address_4;

	var address_ul = $("<ul></ul>");
	for(var i in arr[str]) {
		var address_li = $("<li></li>").html(arr[str][i]);
		
		address_ul.append(address_li);
	}
	$('.'+str).append(address_ul);
}

//鼠标移动显示与隐藏内容
function nav_content(str,str1) {
	$("." + str1).hover(function() {
		$("." + str).show();
		},function(){
		$("." + str).hide();
	})
}

//购物车显示数字的圆
function nums(obj) {
	var canvas = document.getElementById('canvas');
	var canvas1 = document.getElementById('canvas1');
	var str = "a";
	canvas.innerHTML=str;
	canvas.style.color = "#000";
    var ctx = canvas.getContext("2d");//2d处理
    //开启绘图路径
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.arc(10,10,8,0,Math.PI*2,false);//画圆
    ctx.strokeStyle="#F10215";//描边样式 颜色
    ctx.fillStyle="#F10215"; 
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
	
//旋转小图标
function rotate(obj) {
	obj.mouseover(function() {
		$(this).find(".icon_1").css({
			"animation":"iconOver 1s",
			"transform":"rotate(-180deg)"
		});
	}).mouseout(function() {
		$(this).find(".icon_1").css({
			"animation":"iconOut 1s",
			"transform":"rotate(0deg)"
		});
	});
}

//轮播
function lunbo(className1) {
	var curIndex=0;//图片的索引
	var timer = null;
	// var timeInterval = 3000; //时间间隔 单位毫秒
	var arr=new Array();//中间内容的图片轮播
	arr[0]="img_1.jpg";
	arr[1]="img_2.jpg";
	arr[2]="img_3.jpg";
	arr[3]="img_4.jpg";
	arr[4]="img_5.jpg";
	arr[5]="img_6.jpg";
	arr[6]="img_7.jpg";
	arr[7]="img_8.jpg";

    //每隔timeInterval时间，执行一次changeImg事件 
    timer = setInterval(changeImg,5000);   
    document.getElementById("showpic").onmouseover = function() {
    	clearInterval(timer);
    }
    document.getElementById("showpic").onmouseout = function() {
    	timer =setInterval(changeImg,1000);   
    }

    for(var i = 1; i <= $(".circles>div").length; i++) {
			circle($(".circle_" + i));
	} 
	control($(".left_1"),$(".right_1"));

    //图片轮播中的小圆点
	function circle(className2) {
		className2.mouseover(function() {
			$(".circle_1").css({'background-color':'#fff'});
			var className = $(this).attr('class');//找到div的className具体是什么
			className  = className.split('_')[1];//找到circle_1的_后面的数字
			clearInterval(timer);
			curIndex = className - 2;
			console.log(curIndex+1);
			changeImg();
			timer = setInterval(changeImg, 5000);
		}).mouseout(function() {
			className2.css({"background":"#fff"});
		})
	}

	function changeImg() {
	    var obj = document.getElementById("showpic");
	    $(".circle_1").css({'background-color':'#fff'});
	    if (curIndex == arr.length-1) {
	        curIndex = 0;
	    } else {
	        curIndex += 1;
	    }
	    obj.src="./images/" + arr[curIndex];
	    $(".circle").css({'background': 'white'});
	    $(".circle_" + (curIndex+1)).css({'background': '#f10215'});  
	}

	function changeImgs() {
		$(".circle_1").css({'background-color':'#fff'});
	    var obj = document.getElementById("showpic");
	     if(curIndex == 0) {
	        curIndex = arr.length;        
	    } 
	    curIndex--;
	    console.log(curIndex);
	    obj.src="./images/" + arr[curIndex];    
	    $(".circle_" + (curIndex+1)).css({'background': '#f10215'}); 
	    $(".circle_"+ (curIndex+2)).css({'background-color':'#fff'});
	}

	function control(class1,class2) {
		$(class1).click(function() {
			changeImgs();
			// clearInterval(timer);
		})
		$(class2).click(function() {
			changeImg();
		})
	}
}

//news tab切换
function newsTab(obj) {
	var news = ['tab1','tab2'];
	for(var i=0; i<2; i++){
		if(news[i] == obj){
			document.getElementById(news[i]).style.display = "block";
			document.getElementsByClassName("active")[0].style.display="block";
			document.getElementsByClassName("active")[0].style.left=(i) * 53 + 3 + "px";
		}else{
			document.getElementById(news[i]).style.display = "none";
		}
	}
}

//services tab切换
// function servicesTab() {
// 	var right_service = document.getElementsByClassName('right_service');
// 	// right_service.style.transform = "translate(100px)";
// }


//鼠标经过话费显示他的页面
// function tip(obj) {
// 	obj.onmouseover(function() {
// 		$(".").css('display':'block');
// 	})
// }


//秒杀的计时器
function GetRTime() {
	var NowTime = new Date();//获取当前时间 
	
	var EndTime = new Date('2017/06/24 0:10:55'); //设置截止时间 
	 
	var t =EndTime.getTime() - NowTime.getTime();//时间差 

	var h=Math.floor(t/1000/60/60%24);
	var m=Math.floor(t/1000/60%60);
	var s=Math.floor(t/1000%60);

	document.getElementById("hours").innerHTML = h;
	document.getElementById("minutes").innerHTML = m;
	document.getElementById("seconds").innerHTML = s;
}
// setInterval(GetRTime,0);


//秒杀下面 鼠标经过文字图向上移动
function img(obj) {
	obj.mouseover(function() {
		$(this).children().filter(".img_1").children().css({"marginTop":"-4px"});
		$(this).children().filter(".sk_item_name").css({"color":"#f10214"});
	}).mouseout(function() {
		$(this).children().filter(".img_1").children().css({"marginTop":"0px"});
		$(this).children().filter(".sk_item_name").css({"color":"#999"});
	});
}

// 秒杀下面的轮播
function box_list(class1,class2) {
	var obj;
	var left;
	var exp = 1;//标志 向左
	var stop = document.querySelector('.box_hd_list');
	function run(){
		for(var i = 0;i < 4;i++){
			obj = document.querySelector(".list_" + i);//获取图片
			// $(".box_hd_list").children();
			console.log(obj);
			left = window.getComputedStyle(obj,null).left.replace('px','')-0;//字符串隐士转换为数字
			if(exp==1){
				obj.style.left = (left <= -1000)?('2000px'):(left-1000+'px');
			}else{
				obj.style.left = (left >= 2000)?('-1000px'):(left+1000+'px');
			}
		}
	}
	class1.get(0).onclick = function(){
		exp = 1;
		run();
	}

	class2.get(0).onclick = function(){
		exp = -1;
		run();
	}
}

//发现好货 领券中心 新品首发 的图片移动
function findImg(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8) {
	obj1.mouseover(function() {
		$(this).find(".box_find_name_img").css({"right": "10px"});
	}).mouseout(function() {
		$(this).find(".box_find_name_img").css({"right": "6px"});
	});

	obj2.mouseover(function() {
		$(this).css({"marginLeft": "21px"});
	}).mouseout(function() {
		$(this).css({"marginLeft": "25px"});
	});

	obj3.mouseover(function() {
		$(this).find(".shopping_con_right").css({"left": "58px"});
	}).mouseout(function() {
		$(this).find(".shopping_con_right").css({"left": "45px"});
	});

	obj4.mouseover(function() {
		$(this).find(".share_center_img").css({"left": "-10px"});
	}).mouseout(function() {
		$(this).find(".share_center_img").css({"left": "0px"});
	});

	obj5.mouseover(function() {
		$(this).find(".share_center_item2_img").css({"marginLeft": "-10px"});
	}).mouseout(function() {
		$(this).find(".share_center_item2_img").css({"marginLeft": "0px"});
	});

	obj6.mouseover(function() {
		$(this).find(".cloth_content1_img").css({"marginLeft": "-10px"});
	}).mouseout(function() {
		$(this).find(".cloth_content1_img").css({"marginLeft": "0px"});
	});

	obj7.mouseover(function() {
		$(this).find(".cloth_content2_img1").css({"marginLeft": "-10px"});
	}).mouseout(function() {
		$(this).find(".cloth_content2_img1").css({"marginLeft": "0px"});
	});

	obj8.mouseover(function() {
		$(this).find(".box_hd_cloth_content5_img1").css({"marginLeft": "-10px"});
	}).mouseout(function() {
		$(this).find(".box_hd_cloth_content5_img1").css({"marginLeft": "0px"});
	});
}

//手机产品等tab切换
function iphoneTab(obj) {
	var iphoneTabs = ['tab1_1','tab1_2','tab1_3','tab1_4','tab1_5'];
	for(var i = 0; i < 5; i++){
		if(iphoneTabs[i] == obj){
			document.getElementById(iphoneTabs[i]).style.display = "block";
			document.getElementsByClassName("box_hd_head_tab_line")[0].style.left=(i) * 75+ 18 +"px";
		} else {
			document.getElementById(iphoneTabs[i]).style.display = "none";
		}
	}
}

// 左边列表的tab切换,鼠标经过显示不同列表
function displayList() {
	$(".ele").mouseover(function() {
		var id = $(this).attr("idd");
		// console.log($('#'+id));
		$('#'+id).css({
			'display':'block'
		});
		$(".content_middle").css({
			'display':'none'
		});
		$(".content_right").css({
			'display':'none'
		});
	}).mouseout(function() {
		var id = $(this).attr("idd");
		$('#'+id).css({
			'display':'none'
		});
		$(".content_middle").css({
			'display':'block'
		});
		$(".content_right").css({
			'display':'block'
		});
	})	
	
	for(var i = 1; i < 16; i++) {
		$("#list"+i).mouseover(function() {
			$(this).css({
				'display':'block'
			});
			$(".content_middle").css({
				'display':'none'
			});
			$(".content_right").css({
				'display':'none'
			});
		}).mouseout(function() {
			$(this).css({
				'display':'nonea'
			});
			$(".content_middle").css({
				'display':'block'
			});
			$(".content_right").css({
				'display':'block'
			});
		});
	}	

}

//鼠标经过有阴影显示
function shadow() {
	$(".box_rec_item1").mouseover(function() {
		$(this).css({
			"opacity":"0.7",
			"transition":".3s"
		});
	}).mouseout(function() {
		$(this).css({
			"opacity":""
		});
	});
}

// 鼠标经过二维码显示大的二维码
function erMa(obj) {
	$(obj).mouseover(function() {
		$(this).children(".cloth_mas").css({
			"display":"block"
		});
	}).mouseout(function() {
		$(this).children(".cloth_mas").css({
			"display":"none"
		});
	})

	$(obj).mouseover(function() {
		$(this).children().children(".cloths_imgs_ma_it").css({
			"display":"block"
		});
	}).mouseout(function() {
		$(this).children().children(".cloths_imgs_ma_it").css({
			"display":"none"
		});
	})
}

//鼠标经过左边列表内容显示
function block(obj,obj1) {
	$(obj).mouseover(function() {
		$(this).css({
			"background-color":"#999395"
		});
	}).mouseout(function() {
		$(this).css({
			"background-color":""
		});
	})
}

// 滑动页面到一定高度出现搜索栏
function display_sousuo() {
	// console.log(document.body.scrollTop);
	if(document.body.scrollTop < 600) {
		$(".form_display").fadeOut("slow");
	} else {
		$(".form_display").fadeIn("slow");
	}
}

// 滚动屏幕到指定元素位置
function scrollScreen(obj){
	var top = obj.offset().top;
	console.log(top);
	if(document.body.scrollTop < top){
		timer = setInterval("doScroll("+top+",200)",100);
	}else if(document.body.scrollTop > top){
		timer = setInterval("doScroll("+top+",-200)",100);
	}
}

function doScroll(top,speed){
	document.body.scrollTop += speed;
	if(Math.abs(document.body.scrollTop - top) <= 200){
		clearInterval(timer);
	}
}


//右边的工具栏tool
function toolDis(obj,obj1) {
	$(obj).mouseover(function() {
		$(this).css({
			"background":"red",
			"border-radius":"0"
		});
		$(this).find(".icon_text").css({
			"transform":"scaleX(1)",
			"transition":"all .4s"
		});
	}).mouseout(function() {
		$(this).css({
			"background":"#7a6e6e"
		});
		$(this).find(".icon_text").css({
			"transform":"scaleX(0)",
			"transition":"all .4s"
		});
	})

	$(obj1).mouseover(function() {
		$(this).css({
			"background":"red",
			"border-radius":"0px"
		});
		$(this).find(".icon_text").css({
			"left":"-60px",
			"border-radius":"3px 0 0 3px",
			"transition":"all .6s ease",
			"opacity": "1"
		});
	}).mouseout(function() {
		$(this).css({
			"background":"#7a6e6e",
		});
		$(this).find(".icon_text").css({
			"opacity": "0",
			"transition":"all .6s ease"
		});
	})
}

// 滑动页面到一定高度出现左侧工具块
function display_tool() {
	// console.log(document.body.scrollTop);
	if(document.body.scrollTop < 1600) {
		$(".display_list").fadeOut("slow");
	} else {
		$(".display_list").fadeIn("slow");
	}
}

// 滑动页面到一定高度时出现左侧工具块
$(document).ready(function(){
	$(".display_list ul li a").click(function() {    
        $("html, body").animate({    
            scrollTop: $($(this).attr("href")).offset().top-52+ "px"    
        }, 500);    
        return false;    
    }); 
});
