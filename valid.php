<?php 
include("connection.php");
header('Access-Control-Allow-Origin:*');

$email=$_POST["email"];
$password=$_POST["password"];
$check= $conn->prepare("SELECT email FROM users WHERE email=?");
$check->bind_param('s',$email);
$check->execute();
$check->store_result();
$num=$check->num_rows();
$hashed_password=password_hash($password,PASSWORD_BCRYPT);

if($num>0){
    $response['result']="failed";
}
else{
    $query=$conn->prepare("INSERT INTO users(email,password) VALUES(?,?)");
    $query->bind_param('ss',$email,$hashed_password);
    $query->execute();
    $response["result"]="success";
}
echo json_encode($response);
?>