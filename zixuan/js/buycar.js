$(function(){
	//减少商品
	function minusProduces(){
		$("#miuns").click(function(){
			var $num=$(this).next().val();
			var $money=$("#sum").html();
			var $final=parseFloat($money);
			$num--;
			if($num<1){
				$("#spans").html("&nbsp;不能再少了！");
				$(this).next().val(1);
			}else{
				$("#spans").html("");
				$("#sum").html($final-38.5);
				$(this).next().val($num);
			}
		})
	}
	minusProduces();
	//结算
	function jiesuan(){
		$("#gobuy").click(function(){
			var $money=$("#sum").html();
			var total=$("#total").html($money);
		})
	}
	jiesuan();
	//添加商品
	function addProduces(){
		$("#add").click(function(){
			$("#spans").html("");
			var $num=$(this).prev().val();
			var $money=$("#sum").html();
			var $final=parseFloat($money);
			$num++;
			$("#sum").html($final+38.5);
			$(this).prev().val($num);
		})
	}
	addProduces();
	//加入收藏
	function addCollect(){
		var $collet=$("#collect");
		$collet.click(function(){
			if(confirm("是否添加收藏？")){
				alert("添加收藏成功！");
			}
		})
	}
	addCollect();
	//删除商品
	function delProduce(){
		var $total=$("#total");
		var $del=$("#del");
		$del.click(function(){
			if(confirm("是否删除商品？")){
				$("#sum").html("￥0");
				$("#total").html("0");
				$(this).parent().parent().parent().hide();
			}
		})
	}
	delProduce();
	//清除搜索框获得焦点时的边框样式
	$(".content li:first-of-type input[type=image]").click(function(){
		$(this).css("border","4px");
	})
});
