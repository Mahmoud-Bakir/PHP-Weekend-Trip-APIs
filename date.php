<?php
include("connection.php");
header('Access-Control-Allow-Origin:*');
$year=$_POST["date"];
$today=date("Y");
$final=($today-$year);
$response["status"]="$final";
echo json_encode($response);


?>