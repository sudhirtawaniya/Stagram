<?php
$name=$_POST["Name"];
$username=$_POST["Username"];
$password=$_POST["Password"];
$conn=mysqli_connect("localhost","root","","userecoard") or die("connection failed");
$sql="INSERT INTO `user-details`(Name,username,Password) VALUES('$name','$username','$password')";
$query=mysqli_query($conn,$sql)or die('<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Plese Change Username!</strong>Please check there Username Not avaiable on this Time.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>');
if(!$query){
	echo "failed";
		echo $name;
}
?>