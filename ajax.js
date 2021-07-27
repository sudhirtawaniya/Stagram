$(document).ready(function(){
$("#sub-btn").on("click",function(e){
	
	if(document.getElementById("sub-btn").value=="Signup"){
		
	if(signusername.value !="" && username.value !="" && userpassword.value !="" && signuserpassword.value!=""){
		if(userpassword.value==signuserpassword.value){
			$('#progerssm').show();
	e.preventDefault();
	var Username=username.value;
	var Name=signusername.value;
	
	var Password=userpassword.value;
	console.log(Password);
	$.ajax({
		url:'send_data.php',
		type:'POST',
		data:{Name:Name,Username:Username,Password:Password},
		success:function(data){
			$("#ab-1").html(data);
			alert("get");
			$('#progerssm').hide();
			
		},
		error:function (){
			alert("error");
			$('#progerssm').hide();
			}
		
		});
	}
	else{
		signuserpassword.style.backgroundColor="#eb6767";
	}
	}
	else{
		
		if(signuserpassword.value==""){
			signuserpassword.focus();
			signuserpassword.style.backgroundColor="#ffefb5";
			
		}
		if(userpassword.value==""){
			userpassword.focus();
			userpassword.style.backgroundColor="#ffefb5";
		}
		
		if(username.value==""){
			username.focus();
			username.style.backgroundColor="#ffefb5";
		}
		if(signusername.value==""){
			signusername.focus();
			signusername.style.backgroundColor="#ffefb5";
		}
	}
	}
	else{
	
		if(username.value !="" && userpassword.value !=""){
		$('#progerssm').show();
	e.preventDefault();
	var Username=username.value;
	
	
	var Password=userpassword.value;
	
	$.ajax({
		url:'Logindata.php',
		type:'POST',
		data:{Username:Username,Password:Password},
		success:function(data){
			
			$("#ab-1").html(data);
			$('#progerssm').hide();
			
		},
		error:function (){
			alert("error");
			$('#progerssm').hide();
			}
		
		});
	}
	
	
	else{
		if(signusername.value==""){
			signusername.focus();
		}
		
		if(userpassword.value==""){
			userpassword.focus();
		}
		
	}
	}
});	

});