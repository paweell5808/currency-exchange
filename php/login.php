<?php
  include_once("database.php");

  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  if ($request !== null) {
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));

  	$password = md5($password);
  	$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  	$results = mysqli_query($mysqli, $query);

  	if (mysqli_num_rows($results) == 1) {
      $authdata = [
        'name' => $username
      ];
      echo json_encode($authdata);
  	} else {
  	   echo ($password);
      http_response_code(404);
  	}
  }
?>
