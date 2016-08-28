/*
	Copyright (C) 2009 - 2012
	Email:		wangking717@qq.com
	WebSite:	Http://wangking717.javaeye.com/
	Author:		wangking
*/
$(function(){
	var xOffset = -20; // x distance from mouse
    var yOffset = 20; // y distance from mouse  
	
	//input tips
	$("input[reg]").hover(	
		function(e) {
			var tip = $(this).attr("tip");
			var top = (e.clientY + yOffset);
			var left = (e.clientX + xOffset);
			$('body').append( '<p id="vtip"><img id="vtipArrow" src="images/vtip_arrow.png"/>' + tip + '</p>' );
			$('p#vtip').css("top", top+"px").css("left", left+"px");
		},
		function() {
			$("p#vtip").remove();
		}
	).mousemove(
		function(e) {
			var top = (e.clientY + yOffset);
			var left = (e.clientX + xOffset);
			$("p#vtip").css("top", top+"px").css("left", left+"px");
		}
	); 
	
	$("input[reg]").blur(function(){
		validate($(this),"input");
	});

});

function validate(obj,tagType){
	var reg = new RegExp(obj.attr("reg"));
	var objValue = obj.attr("value");
	if(!reg.test(objValue)){
		if(tagType == "input"){
			obj.addClass("input_validation-failed");
		}else{
			obj.addClass("select_validation-failed");
		}
		
		return false;
	}else{
		if(tagType == "input"){
			obj.removeClass("input_validation-failed");
		}else{
			obj.removeClass("select_validation-failed");
		}
		return true;
	}
}