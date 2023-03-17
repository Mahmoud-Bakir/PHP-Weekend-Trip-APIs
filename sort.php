<?php 
include("connection.php");
header('Access-Control-Allow-Origin:*');
$variable=$_GET["list"];
$arr=explode(",",$variable);
sort($arr);
$num=count($arr);
if($num>1){
$final=implode(",",$arr);
$response["status"]="$final";
echo json_encode($response);}
else{
    $response["status"]="failed";
    echo json_encode($response);
}
?>