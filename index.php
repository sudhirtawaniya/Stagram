<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet">
<title>Stagram</title>
<link rel="stylesheet" href="sta.css"/>
</head>
<body>
<div id="container">
<div id="progerssm" style="display:none;" >
 <div class="progress" style="height:5px">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style="width: 20%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: 25%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div> 
<div id="ab-1"></div>
<h1 id="logo">Stagram</h1>
<div id="fr">
<p id="name-lb" class="label" onclick="getfocususer(0)">name</p><input type="text" id="name" required onfocusin="getfocususer(0)" onfocusout="inputout()"/>
<p id="username" class="label" onclick="getfocususer(1)">username</p><input type="text"  required id="username" onfocusin="getfocususer(1)" onfocusout="inputout()"/>

<p id="userpassword" class="label" onclick="getfocususer(2)">password</p><input type="password"  id="password" required onfocusin="getfocususer(2)" onfocusout="inputout()"/>
<p id="confurm_password-lb" class="label" onclick="getfocususer(3)">confurm password</p></br><input type="password" id="confurm_password" required onfocusin="getfocususer(3)" onfocusout="inputout()"/>
<input type="submit" value="Login" id="sub-btn">
<div id="l1">
<hr/>
</div>
<div id="l2">
<p>OR</p>
</div>
<div id="l3">
<hr/>
</div>
<div id="loginwith"></div>
<a href="#">Forget Password?</a>
</div>
</div>

<div id="footer">
<p id="ft">Don't have an account?<a href="#" onclick="signupwin()">Sign up</a></p>
</div>

</body>
<script type="text/javascript" src="sta.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="ajax.js">
</script>
</html>