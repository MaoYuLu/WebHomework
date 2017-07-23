function checkdata() {
	var ssn=form.username.value.toLowerCase();
	
	if (!checkUserName(ssn)) return false;  //用户名检查
	
	if( strlen(form.pwd.value)<6 || strlen(form.pwd.value)>16 ) {
		//alert("\正确地登录密码长度为6-16位，仅可用英文、数字、特殊字符！")
		document.getElementById("pwdErr").innerHTML="<font color = 'red'>正确地登录密码长度为6-16位，仅可用英文、数字、特殊字符！</font>";
		form.pwd.focus()
		return false;
	}
	document.getElementById("pwdErr").innerHTML="";
	
	if( strlen2(form.pwd.value) ) {
		//alert("\您的密码中包含了非法字符，仅可用英文、数字、特殊字符！")
		document.getElementById("pwdErr").innerHTML="<font color = 'red'>您的密码中包含了非法字符，仅可用英文、数字、特殊字符！</font>";
		form.pwd.focus()
		return false;
	}
	document.getElementById("pwdErr").innerHTML="";
	
	if( form.pwd.value == form.username.value ) {
		//alert("\用户名和密码不能相同！")
		document.getElementById("pwdErr").innerHTML="<font color='red'>用户名和密码不能相同!</font>";
		form.pwd.focus()
		return false;
	}
	document.getElementById("pwdErr").innerHTML="";
	
	if( form.pwd2.value =="" ) {
		//alert("\请输入密码确认！")
		document.getElementById("pwd2Err").innerHTML="<font color = 'red'>请输入密码确认！</font>";
		form.pwd2.focus()
		return false;
	}
	document.getElementById("pwd2Err").innerHTML="";
	
	if( form.pwd2.value != form.pwd.value ) {
		//alert("\两次密码输入不一致！")
		document.getElementById("pwd2Err").innerHTML="<font color='red'>两次密码输入不一致</font>";
		form.pwd.focus()
		return false;
	}
	document.getElementById("pwd2Err").innerHTML="";
	//检查性别
	//alert(form.sex.length);
	/*
	var checked = false;
	for( i=0; i<form.sex.length; i++ ) {
		if(form.sex[i].checked) checked = true;
	}
	if(!checked) return false;
	*/
	if( !(form.sex[0].checked || form.sex[1].checked) ) {
		//alert("请选择性别!");
		document.getElementById("sexErr").innerHTML="<font color='red'>请选择性别!</font>";
		form.sex[0].focus();
		return false;
	}
	document.getElementById("sexErr").innerHTML="";
	
	//检查省份
	if( form.province.selectedIndex == 0 ) {
		//alert("请选择省份!");
		document.getElementById("proErr").innerHTML="<font color='red'>请选择省份!</font>";
		form.province.focus();
		return false;
	}
	document.getElementById("proErr").innerHTML="";
	
	
	/*
	if( form.question.value == "") {
		alert("\请输入提示问题,当您忘记密码时可根据该问题提示密码！")
		form.question.focus()
		return false;
	}
	if( strlen(form.answer.value)<6) {
		alert("\请重新输入问题答案，长度不少于6位！")
		form.answer.focus()
		return false;
	}
	if( form.question.value == form.answer.value ) {
		alert("\密码提示问题和答案不能相同！")
		form.answer.focus()
		return false;
	}
	if( strlen(form.pingma.value)<6 || strlen(form.pingma.value)>16 ) {
		alert("\正确的安全码长度为6-16位，仅可用英文、数字、特殊字符！")
		form.pingma.focus()
		return false;
	}
	if( strlen2(form.pingma.value) ) {
		alert("\您的安全码中包含了非法字符，仅可用英文、数字、特殊字符！")
		form.pingma.focus()
		return false;
	}
	if( form.pingma.value == form.username.value ) {
		alert("\用户名和安全码不能相同！")
		form.pingma.focus()
		return false;
	}
	if( form.pingma2.value =="" ) {
		alert("\请输入安全码确认！")
		form.pingma2.focus()
		return false;
	}
	if( form.pingma.value != form.pingma2.value ) {
		alert("\两次安全码输入不一致！")
		form.pingma.focus()
		return false;
	}*/
	if(form.intro.value == "") {
		//alert("\自我介绍不能为空!");
		document.getElementById("textareaErr").innerHTML="<font color='red'>自我介绍不能为空!</font>";
		form.intro.focus();
		return false;
	}
	document.getElementById("textareaErr").innerHTML="";
	return true;
}

function checkUserName(ssn){
	if( ssn.length<3 || ssn.length>18 ) {
		//alert("\请输入正确的用户名,用户名长度为3-18位！")
		document.getElementById("usernameErr").innerHTML = "<font color='red'>请输入正确的用户名,用户名长度为3-18位！</font>";
		form.username.focus()
		return false;
	}
	if (isWhiteWpace(ssn)){
		//alert("\请输入正确的用户名,用户名中不能包含空格！")
		document.getElementById("usernameErr").innerHTML="<font color='red'>请输入正确的用户名,用户名中不能包含空格！</font>";
		form.username.focus()
		return false;
	}
	if (!isSsnString(ssn)){
		//alert("\    对不起，您选择的用户名不正确或已被占用！用户名\n由a～z的英文字母(不区分大小写)、0～9的数字、点、减\n号或下划线组成，长度为3～18个字符，只能以数字或字母\n开头和结尾,例如:kyzy_001。")
		document.getElementById("usernameErr").innerHTML="<font color='red'>对不起，您选择的用户名不正确或已被占用！用户名\n由a～z的英文字母(不区分大小写)、0～9的数字、点、减\n号或下划线组成，长度为3～18个字符，只能以数字或字母\n开头和结尾,例如:kyzy_001。</font>";
		form.username.focus()
		return false;
	}
	document.getElementById("usernameErr").innerHTML="";
	return true;
}

function strlen(str){
	var len;
	var i;
	len = 0;
	for (i=0;i<str.length;i++){
		if (str.charCodeAt(i)>255) len+=2; else len++;
	}
	return len;
}

function strlen2(str){
	var len;
	var i;
	len = 0;
	for (i=0;i<str.length;i++){
		if (str.charCodeAt(i)>255) return true;
	}
	return false;
}

function isWhiteWpace (s)
{
	var whitespace = " \t\n\r";
	var i;
	for (i = 0; i < s.length; i++){   
		var c = s.charAt(i);
		if (whitespace.indexOf(c) >= 0) {
		  	return true;
		}
	}
	return false;
}

function isSsnString (ssn)
{
	var re=/^[0-9a-z][\w-.]*[0-9a-z]$/i;
	if(re.test(ssn))
		return true;
	else
		return false;
}

function checkssn(gotoURL) {
   var ssn=form.username.value.toLowerCase();
   if (checkUserName(ssn)){
	   var open_url = gotoURL + "?username=" + ssn;
	   window.open(open_url,'','status=0,directories=0,resizable=0,toolbar=0,location=0,scrollbars=0,width=322,height=200');
	}
}