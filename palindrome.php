<?php 
include("connection.php");
header('Access-Control-Allow-Origin:*');
$variable=$_GET["palindrome"];
$test=strtolower($variable);
$final=strrev($test);
if($final==$test){
  $response["status"]="is a palindrome";
  $response["value"]="$final";
}
else{
    $response["status"]="is not a palindrome";
    $response["value"]="$final";
}
echo json_encode($response);
?>