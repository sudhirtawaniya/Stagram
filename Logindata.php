<?php
$username=$_POST["Username"];
$password=$_POST["Password"];
$conn=mysqli_connect("localhost","root","","userecoard") or die("connection failed");
$sql="SELECT * FROM `user-details` WHERE `username` ='$username' AND `Password` ='$password'";
$query=mysqli_query($conn,$sql);
$num=mysqli_num_rows($query);
if($num==0){
	echo '<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>worng Username or Password!</strong>Please check there is worng user name or password
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>';
}

?>