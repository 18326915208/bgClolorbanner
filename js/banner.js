$(function(){
			    //第一张显示
			    $(".ban_img_scroll li").eq(0).show();
			    //鼠标滑过手动切换，淡入淡出
			    var i=0;
			    var onOff=true;
			    var arr=["#efc08c","#e2d6ca","#517720"]
			    $(".banner_point span").mouseover(function() {
			    	if(onOff){
			    		onOff=false;
			    		$(this).addClass("first").siblings().removeClass("first");
				        var index = $(this).index();
				        i = index;
				        $(".ban_img_scroll li").eq(index).fadeIn(500).siblings().fadeOut(500,function(){
				        	onOff=true;
				        	$(".banner").css({"backgroundColor":arr[i]})
				        });
			    	}
			    });
			    //自动轮播
			    var timer=setInterval(play,2000);
			    //向右切换
			    var len =$(".ban_img_scroll li").length-1;
			    var play=function(){
			    	if(onOff){
			    		onOff=false;
			    		i++;
				        i = i > len ? 0 : i ;
				        $(".banner_point span").eq(i).addClass("first").siblings().removeClass("first");
				        $(".ban_img_scroll li").eq(i).fadeIn(500).siblings().fadeOut(500,function(){
				        	onOff=true;
				        	$(".banner").css({"backgroundColor":arr[i]})
				        });
			    	}
			    }
			    //鼠标移入移出效果
			    $(".ban_center").hover(function() {
			        clearInterval(timer);
			    }, function() {
			        timer=setInterval(play,2000);
			    });
			})