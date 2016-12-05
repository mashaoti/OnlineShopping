$(function() {	
	/*
	 * 1. ��ע�ᰴť���submit()�¼�����ɱ�У��
	 */
	$("#submit").submit(function(){
		$("#msg").text("");
		var bool = true;
		$(".input").each(function() {
			var inputName = $(this).attr("name");
			if(!invokeValidateFunction(inputName)) {
				bool = false;
			}
		});
		return bool;
	});
	
	/*
	 * 3. ������ƶ�����ʱ����У��
	 */
	$(".input").blur(function() {
		var inputName = $(this).attr("name");
		invokeValidateFunction(inputName);
	});
});

/*
 * ����input���ƣ����ö�Ӧ��validate������
 * ����input����Ϊ��loginname����ô����validateLoginname()������
 */
function invokeValidateFunction(inputName) {
	inputName = inputName.substring(0, 1).toUpperCase() + inputName.substring(1);
	var functionName = "validate" + inputName;
	return eval(functionName + "()");	
}

/*
 * У������
 */
function validateLoginpass() {
	var bool = true;
	$("#loginpassError").css("display", "none");
	var value = $("#loginpass").val();
	if(!value) {// �ǿ�У��
		$("#loginpassError").css("display", "");
		$("#loginpassError").text("���벻��Ϊ�գ�");
		bool = false;
	} else if(value.length < 3 || value.length > 20) {//����У��
		$("#loginpassError").css("display", "");
		$("#loginpassError").text("���볤�ȱ�����3 ~ 20֮�䣡");
		bool = false;
	};
	return bool;
}

// У��������
function validateNewpass() {
	var bool = true;
	$("#newpassError").css("display", "none");
	var value = $("#newpass").val();
	if(!value) {// �ǿ�У��
		$("#newpassError").css("display", "");
		$("#newpassError").text("�����벻��Ϊ�գ�");
		bool = false;
	} else if(value.length < 3 || value.length > 20) {//����У��
		$("#newpassError").css("display", "");
		$("#newpassError").text("�����볤�ȱ�����3 ~ 20֮�䣡");
		bool = false;
	}
	return bool;
}

/*
 * У��ȷ������
 */
function validateReloginpass() {
	var bool = true;
	$("#reloginpassError").css("display", "none");
	var value = $("#reloginpass").val();
	if(!value) {// �ǿ�У��
		$("#reloginpassError").css("display", "");
		$("#reloginpassError").text("ȷ�����벻��Ϊ�գ�");
		bool = false;
	} else if(value != $("#newpass").val()) {//���������Ƿ�һ��
		$("#reloginpassError").css("display", "");
		$("#reloginpassError").text("�����������벻һ�£�");
		bool = false;
	}
	return bool;	
}

/*
 * У����֤��
 */
function validateVerifyCode() {
	var bool = true;
	$("#verifyCodeError").css("display", "none");
	var value = $("#verifyCode").val();
	if(!value) {//�ǿ�У��
		$("#verifyCodeError").css("display", "");
		$("#verifyCodeError").text("��֤�벻��Ϊ�գ�");
		bool = false;
	} else if(value.length != 4) {//���Ȳ�Ϊ4���Ǵ����
		$("#verifyCodeError").css("display", "");
		$("#verifyCodeError").text("�������֤�룡");
		bool = false;
	} else {//��֤���Ƿ���ȷ
		$.ajax({
			cache: false,
			async: false,
			type: "POST",
			dataType: "json",
			data: {method: "ajaxValidateVerifyCode", verifyCode: value},
			url: "/goods/UserServlet",
			success: function(flag) {
				if(!flag) {
					$("#verifyCodeError").css("display", "");
					$("#verifyCodeError").text("�������֤�룡");
					bool = false;					
				}
			}
		});
	}
	return bool;
}
