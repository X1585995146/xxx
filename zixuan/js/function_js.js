$(function(){
	$.ajax({
		url: "index/ajaxJson.html",
		type: 'GET',
		dataType: 'json',
		beforeSend:function(){},
		success:function(jsondata){
			$.each(jsondata,function(i){
				$("#bb").append("<option>"+jsondata[i].tag_name+"</option>");
			})
		},
		error:function(event,request,settings){
			alert(settings);
		},
	})
})

	
