<?php 
include("connection.php");
header('Access-Control-Allow-Origin:*');
$variable=$_GET["flip"];
$size=strlen($variable);
$test=str_split($variable);
$temp=[];
$positions=[];
$i=0;
$j=0;
for($i=0;$i<$size;$i++){
    if($test[$i]=="0" or $test[$i]=="1" or $test[$i]=="2" or $test[$i]=="3" or $test[$i]=="4" or $test[$i]=="5" or $test[$i]=="6" or $test[$i]=="7" or $test[$i]=="8" or $test[$i]=="9")
    {array_push($temp,$test[$i]);
     array_push($positions,$i);
    }

   }
$numbers=implode(",",$temp); //undefined array key, please help in solving , I cant not understand.
$reversed_numbers=strrev($numbers);
$rev=explode(",",$reversed_numbers);
$final=[];
 for($i=0;$i<$size;$i++){
  if($i==$positions[$j]){
  $final[$i]=$rev[$j];
  $j++;
  }else $final[$i]=$test[$i];
  }
$f=implode("",$final);
$response["status"]="$f";
echo json_encode($response);
?>

