<?php
include("connection.php");
$add=$_SERVER['REMOTE_ADDR'];
$response["status"]="$add";
echo json_encode($response);
?>