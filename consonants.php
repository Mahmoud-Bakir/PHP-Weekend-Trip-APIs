<?php
include("connection.php");
$vowels=["a","o","e","i","u"];
echo($vowels);
$variable=$_POST["con"];
$size=strlen($variable);
$test=str_split($variable);
$final=[];
$temp=[];
for($i=0;$i<$size;$i++){
    for($j=0;$j<5;$j++){
        if($test[$i]==$vowels[$j])
        array_push($final,$test[$i]);
    } else{
        array_push($temp,$test[$i])
        print_r($temp)
    }
}


?>