<?php
function MyText($T){
$temp=$T;
$temp=trim($temp);
$temp=stripcslashes($temp);
$temp=htmlspecialchars($temp,ENT_QUOTES);
return $temp;
}
	
$str='';
	
// получаем переменные из формы Отзывов и обрабатываем их
$Name=isset($_POST['username']) ? $_POST['username']:'';
$City=isset($_POST['city']) ? $_POST['city']:'';
$Otzive=isset($_POST['textOtz']) ? $_POST['textOtz']:'';
$woher=isset($_POST['woher']) ? $_POST['woher']:'';

// получаем переменные из формы Заказов  и обрабатываем их
$NameOrder=isset($_POST['usernameOrder']) ? $_POST['usernameOrder']:'';
$Phone=isset($_POST['phone']) ? $_POST['phone']:'';
$cityOrder=isset($_POST['cityOrder']) ? $_POST['cityOrder']:'';
$typeOrder=isset($_POST['typeOrder']) ? $_POST['typeOrder']:'';	
		
	
if(strlen($Name)!=0 && strlen($Otzive)!=0) 
{	
	$Name=MyText($Name);
	$City=MyText($City);
	$Otzive=nl2br(MyText($Otzive));
	SendMailFromOtziv($Name,$City,$Otzive,$woher);
}
	
if(strlen($Phone)!=0) 
{
	$NameOrder=MyText($NameOrder);
	$Phone=MyText($Phone);
	$cityOrder=MyText($cityOrder);
	SendMailFromOrder($NameOrder,$Phone,$cityOrder,$typeOrder);
}
	
function SendMailFromOrder($NameOrder,$Phone,$cityOrder,$typeOrder){
	if(strlen($Phone)>15){
		$str="Слишком длинный телефон";
		echo $str;
	}
	else{
		$to="salesvannalux@yandex.by";$title="Заказ: ".$typeOrder;
		$headers="Заказ от: ".$NameOrder."\n"."с города: ".$cityOrder."\n"."Телефон: ".$Phone;
		mail($to,$title,$headers);
		$str='Сообщение отправленно!';
		echo $str;
	}
}
function SendMailFromOtziv($Name,$City,$Otzive,$woher){
	if(strlen($Name)>60 || strlen($City)>50)
	{
		$str='Error';
		echo $str;
	}
	else 
	{
		$to="salesvannalux@yandex.by";
		$title=$woher;
		$headers="Отзыв от: ".$Name."\n"."с города: ".$City."\n"."Отзыв: ".$Otzive;
		mail($to,$title,$headers);
		$str='Сообщение отправленно!';
		echo $str;
	}
}
?>