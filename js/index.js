		$(".country01").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ico").animate({top:"31px",left:"229px"});
			$(".index_sku2 ul").eq(0).show().siblings().hide()
		})
		$(".country02").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ico").animate({top:"17px",left:"423px"});
			$(".index_sku2 ul").eq(1).show().siblings().hide()
		})	
		$(".country03").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ico").animate({top:"45px",left:"615px"});
			$(".index_sku2 ul").eq(2).show().siblings().hide()
		})	
		$(".country04").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ico").animate({top:"20px",left:"804px"});
			$(".index_sku2 ul").eq(3).show().siblings().hide()
		})	
		$(".country05").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ico").animate({top:"34px",left:"1017px"});
			$(".index_sku2 ul").eq(4).show().siblings().hide()
		})
		//闪烁效果未能实现！
	/*$(function(){
		setInterval(icoBig(),500)
	})
		function icoBig(){
			$(".ico03").css({
				width:"22px",
				height:"22px"
			});
			$(".ico03").animate({
				width:"35px",
				height:"35px"
			},500)
		}	*/
		show_time();
		function show_time(){ 
			var t_start = new Date().getTime(); //设定当前时间
			var t_end =  new Date("2016/07/16 00:00:00").getTime(); //设定目标时间
			// 计算时间差 
			var d = t_end - t_start; 
			// 天
			var day = Math.floor(d/86400000) 
			d -= day * 86400000; 
			// 时
			var hour = Math.floor(d/3600000) 
			d -= hour * 3600000; 
			// 分
			var min = Math.floor(d/60000) 
			d -= min * 60000; 
			// 秒 
			var sec = Math.floor(d/1000) 
			// 时分秒为单数时、前面加零 
			if(day < 10){ 
				day = "0" + day; 
			} 
			if(hour < 10){ 
				hour = "0" + hour; 
			} 
			if(min < 10){ 
				min = "0" + min; 
			} 
			if(sec < 10){
				sec = "0" + sec; 
			} 
			// 显示时间 
			$(".word02 span").eq(0).html(hour); 
			$(".word02 span").eq(1).html(min); 
			$(".word02 span").eq(2).html(sec); 
			// 设置定时器
			setTimeout(function(){
				show_time()
			},1000)
		}
		$(".box").hover(function(){
		$(this).css({
			border:"4px solid #f8f8f6",
		})
		$(this).find(".pic").animate({top:"-5px"},300);
		$(this).find(".name").animate({top:"-5px"},300);
		$(this).find(".price").animate({top:"-15px"},300);
		$(this).find(".btn").animate({top:"-40px"},300)
	},function(){
		$(this).css({
			border:"1px solid #eee",
		})
		$(this).find(".pic").animate({top:"0"},300);
		$(this).find(".name").animate({top:"0},300);
		$(this).find(".price").animate({top:"0"},300);
		$(this).find(".btn").animate({top:"0"},300)
	})
	$(".index_tab dl dt").hover(function(){
		$(this).addClass("on")
		$(this).parent().siblings().find("dt").removeClass("on");
		
		$(this).parent().siblings().find("dd").hide();
		$(this).next().show();
	})