var username=document.getElementsByTagName("input")[1];
var userpassword=document.getElementsByTagName("input")[2];
var userlabel_n=document.getElementsByTagName("p")[1];
var userlabel_p=document.getElementsByTagName("p")[2];
var signlabel_n=document.getElementsByTagName("p")[0];
var signlabel_p=document.getElementsByTagName("p")[3];
var signusername=document.getElementsByTagName("input")[0];
var signuserpassword=document.getElementsByTagName("input")[3];
username.style.transition = "all 0.2s";
userpassword.style.transition = "all 0.2s";
userlabel_n.style.transition = "all 0.2s";
userlabel_p.style.transition = "all 0.2s";

signusername.style.transition = "all 0.2s";
signuserpassword.style.transition = "all 0.2s";
signlabel_n.style.transition = "all 0.2s";
signlabel_p.style.transition = "all 0.2s";

function inputout(){
	signusername.style.backgroundColor="#ebebeb";
	username.style.backgroundColor="#ebebeb";
	signuserpassword.style.backgroundColor="#ebebeb";
	userpassword.style.backgroundColor="#ebebeb";
	username.style.height="40px";
	userpassword.style.height="40px";
	if(username.value==""){
	userlabel_n.style.color="#505152";
	userlabel_n.style.top="25px";
	signusername.style.marginBottom="0px";
	}
	if(userpassword.value==""){
	userlabel_p.style.color="#505152";
	userlabel_p.style.top="25px";
username.style.marginBottom="0px";
	}
	
	
	
	signusername.style.height="40px";
	signuserpassword.style.height="40px";
	if(signusername.value==""){
	signlabel_n.style.color="#505152";
	signlabel_n.style.top="25px";
	}
	if(signuserpassword.value==""){
	signlabel_p.style.color="#505152";
	signlabel_p.style.top="25px";
	userpassword.style.marginBottom="0px";
	}
	
}
function getfocususer(which){
	
	
	if(which==2){
		userpassword.focus();
		userpassword.style.height="50px";
		userpassword.style.backgroundColor="#ebebeb";
	userlabel_p.style.color="orange";
	userlabel_p.style.top="-5px";
	username.style.marginBottom="20px";
   	
	}
	else if(which==1){
		username.focus();
		username.style.height="50px";
	userlabel_n.style.color="orange";
	username.style.backgroundColor="#ebebeb";
	userlabel_n.style.top="-5px";
	signusername.style.marginBottom="20px";
	
	}
	 else if(which==3){
		 signuserpassword.focus();
		 signuserpassword.style.backgroundColor="#ebebeb";
		signuserpassword.style.height="50px";
	signlabel_p.style.color="orange";
	signlabel_p.style.top="-5px";
	userpassword.style.marginBottom="20px";
	}
	else{
		signusername.focus();
		signusername.style.height="50px";
		signusername.style.backgroundColor="#ebebeb";
	signlabel_n.style.color="orange";
	signlabel_n.style.top="-5px";
	signlabel_p.style.marginTop="5px";
	}
	
	
}
function signupwin(){

	document.getElementById("ft").innerHTML="Already have an Account?<a href='#' onclick='loginwin()'>Login</a>";
	document.getElementsByTagName("input")[4].value="Signup";
signusername.style.display="block";
signlabel_n.style.display="block";	

signlabel_p.style.display="inline-block";	
signuserpassword.style.display="inline-block";
}
function loginwin(){
	document.getElementById("ft").innerHTML="Don't have an account?<a href='#' onclick='signupwin()'>Sign up</a>";
	document.getElementsByTagName("input")[4].value="Login";
signusername.style.display="none";
signlabel_n.style.display="none";	

signlabel_p.style.display="none";	
signuserpassword.style.display="none";
	
}