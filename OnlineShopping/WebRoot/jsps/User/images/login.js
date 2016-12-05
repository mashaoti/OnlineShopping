$(function(){
	
	
	
	$('#switch_qlogin').click(function(){
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({left:'0px',width:'70px'});
		$('#qlogin').css('display','none');
		$('#web_qr_login').css('display','block');
		
		});
	$('#switch_login').click(function(){
		
		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({left:'154px',width:'70px'});
		
		$('#qlogin').css('display','block');
		$('#web_qr_login').css('display','none');
		});
if(getParam("a")=='0')
{
	$('#switch_login').trigger('click');
}


/*
 *  输入框得到焦点隐藏错误信息
 */
$(".inputstyle2").focus(function() {
	if ($('#user').val().length < 3 || $('#user').val().length > 16) {

		$('#user').focus().css({
			border: "1px solid",
			boxShadow: "0 0 "
		});
		$('#userCue').html("<font color='red'><b>×用户名位3-16字符</b></font>");
		return false;
	}
	
	$('#userCue').html("<font>快速注册请注意格式</font>");
});
//用户密码为空时候

/*
 *  输入框得到焦点隐藏错误信息
 */
$(".inputstyle2").focus(function() {
	if ($('#user').val().length < 3 || $('#user').val().length > 16) {

		$('#user').focus().css({
			border: "1px solid",
			boxShadow: "0 0 "
		});
		$('#userCue').html("<font color='red'><b>×用户名位3-16字符</b></font>");
		return false;
	}
	
	$('#userCue').html("<font>快速注册请注意格式</font>");
	
});
	
$("input").focus(function(){
	
	$('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
	if ($('#passwd').val().length>=6) {
	 return  $('#userCue').html("<font>快速注册请注意格式</font>");
	}
	if($('#passwd2').val() != $('#passwd').val()){
		 return  $('#userCue').html("<font color='red'><b>×两次密码不一致</b></font>");
	}
  });
//验证密码是否相等
$("input").focus(function(){
	
	if($('#passwd2').val() != $('#passwd').val()){
		 return  $('#userCue').html("<font color='red'><b>×两次密码不一致</b></font>");
	}
	var EmailConfirm =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if (!EmailConfirm.test($('#Email').val()) ) {
		
		return $('#userCue').html("<font color='red'><b>Email格式不正确</b></font>");
	} else {
		return  $('#userCue').html("<font>快速注册请注意格式</font>");
	}
  });
	


//验证邮箱是否正确


	




});
//密码长度不能小于6位


	
function logintab(){
	scrollTo(0);
	$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
	$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
	$('#switch_bottom').animate({left:'154px',width:'96px'});
	$('#qlogin').css('display','none');
	$('#web_qr_login').css('display','block');
	
}


//根据参数名获得该参数 pname等于想要的参数名 
function getParam(pname) { 
    var params = location.search.substr(1); // 获取参数 平且去掉？ 
    var ArrParam = params.split('&'); 
    if (ArrParam.length == 1) { 
        //只有一个参数的情况 
        return params.split('=')[1]; 
    } 
    else { 
         //多个参数参数的情况 
        for (var i = 0; i < ArrParam.length; i++) { 
            if (ArrParam[i].split('=')[0] == pname) { 
                return ArrParam[i].split('=')[1]; 
            } 
        } 
    } 
}  


var reMethod = "GET",
	pwdmin = 6;

$(document).ready(function() {


	
	
//获取同意并注册按钮点击检验
	$('#reg').click(function() {
//用户名检测
		if ($('#user').val() == "") {
			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×用户名不能为空</b></font>");
			return false;
		}
	
	
//密码检测
		

		if ($('#user').val().length < 3 || $('#user').val().length > 16) {

			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×用户名位3-16字符</b></font>");
			return false;

		}
		
		


		if ($('#passwd').val().length < pwdmin) {
			$('#passwd').focus();
			$('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
			return false;
		}
		if ($('#passwd2').val() != $('#passwd').val()) {
			$('#passwd2').focus();
			$('#userCue').html("<font color='red'><b>×两次密码不一致！</b></font>");
			return false;
		}

		
		var EmailConfirm =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if (!EmailConfirm.test($('#Email').val()) ) {
			$('#Email').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>Email格式不正确</b></font>");return false;
		} else {
			$('#Email').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});
			
		}
		
		if ($('#verifyCode').val() == "") {
			$('#verifyCode').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×验证码不能为空</b></font>");
			return false;
		}
		if($('#verifyCode').val().length!=4) {
			/*
			 * 获取对应的label
			 * 添加错误信息
			 * 显示label
			 */
			$('#userCue').html("<font color='red'><b>×错误的验证码！</b></font>");
			
			return false;
		}
		
		
		
		$('#regUser').submit();

		$.ajax({
			url:"goods/UserServlet",//要请求的servlet
			data:{method:"ajaxValidateLoginname", loginname:value},//给服务器的参数
			type:"POST",
			dataType:"json",
			async:false,//是否异步请求，如果是异步，那么不会等服务器返回，我们这个函数就向下运行了。
			cache:false,
			success:function(result) {
			
					alert("123");
					if(!result) {//如果校验失败
					$('#userCue').html("<font color='red'><b>×用户名已经被注册！</b></font>");
					return false;
				}
			}
			
			});	
	});
	

});



function _hyz() {
	/*
	 * 1. 获取<img>元素
	 * 2. 重新设置它的src
	 * 3. 使用毫秒来添加参数
	 */
	$("#imgVerifyCode").attr("src", "/goods/VerifyCodeServlet?a=" + new Date().getTime());
}
