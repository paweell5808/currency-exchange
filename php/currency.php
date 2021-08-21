<?php
  include_once("database.php");

if (isset($_GET['username'])) {
    $username = $_GET['username'];
    $query = "SELECT username, `PLN`, `USD`, `EUR`, `CHF`, `RUB`, `CZK`, `GBP`
      from currency inner join users on user_id = users.id WHERE username = '$username'";

    $results = mysqli_query($mysqli, $query);

    if (mysqli_num_rows($results) == 1) {
        while($row = $results->fetch_assoc()) {
           $data = [
             'name' => $username,
             'PLN' => $row["PLN"],
             'USD' => $row["USD"],
             'EUR' => $row["EUR"],
             'CHF' => $row["CHF"],
             'RUB' => $row["RUB"],
             'CZK' => $row["CZK"],
             'GBP' => $row["GBP"],
           ];
           echo json_encode($data);
        }
    } else {
      http_response_code(404);
    }
} else {
   http_response_code(400);
}

?>
