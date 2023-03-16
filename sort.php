<?php 
include("connection.php");
header('Access-Control-Allow-Origin:*');
$variable=$_GET["list"];
$arr=explode(",",$variable);
sort($arr);
$final=implode(",",$arr);
$response["status"]="$final";
echo json_encode($response);
?>