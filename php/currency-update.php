<?php
  include_once("database.php");

  $data = json_decode(file_get_contents('php://input'), true);
  $updateValues = '';
  $username = '';

  if (is_array($data) || is_object($data)) {
    foreach($data as $key => $val) {
      if ($key != 'username') {
        $updateValues = $updateValues . $key . '=' . $val . ',';
      } else {
        $username = $val;
      }
    }
  }

  $updateValues = substr($updateValues, 0, -1);

  $query = "UPDATE currency INNER JOIN users ON currency.user_id = users.id SET " . $updateValues ." WHERE username = '$username'";

  mysqli_query($mysqli, $query);

  if ($mysqli->affected_rows) {
    http_response_code(200);
  } else {
    http_response_code(400);
  }

?>
