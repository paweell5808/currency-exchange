<?php
  include_once("database.php");

  $postdata = file_get_contents('php://input');
  $request = json_decode($postdata);

  if ($request !== null) {
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));

    if (empty($username) || empty($email) || empty($password)) {
      http_response_code(400);
    }

    $checkUserExist = "SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
    $result = mysqli_query($mysqli, $checkUserExist);
    $user = mysqli_fetch_assoc($result);

    if ($user) {
      http_response_code(409);
    } else {
      $password = md5($password);
      $newUser = "INSERT INTO users (username, email, password)
            VALUES('$username', '$email', '$password')";

      mysqli_query($mysqli, $newUser);

      $usrId = mysqli_insert_id($mysqli);

      $newCurrency = "INSERT INTO `currency` (`user_id`) VALUES ('$usrId')";
      mysqli_query($mysqli, $newCurrency);
    }
  }
?>
