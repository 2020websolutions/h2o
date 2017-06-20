<?php
/* h20 VRM connection*/

$data=array();
$data['strUserName'] ='H2O';
$data['strPassword'] ='433999966';
$data['strClientRef'] ='live';
$data['strClientDescription'] ='live';
$data['strKey1'] ='CV56tr48';
$data['strVRM'] ='';
$data['strKey1'] ='CV56tr48';
$data['strVersion'] ='0.31.1';

foreach ($data as $key=>$value) {
$post_str.=$key.'='.urlencode($value).'&';
}

$post_str=substr($post_str,0,-1);

$curl = curl_init();
curl_setopt_array($curl, Array(
	CURLOPT_URL            => 'http://www1.carwebuk.com/CarweBVrrb2bproxy/carwebvrrWebService.asmx',
	CURLOPT_USERAGENT      => 'spider',
	CURLOPT_TIMEOUT        => 120,
	CURLOPT_CONNECTTIMEOUT => 30,
	CURLOPT_POSTFIELDS =>  $post_str,
	CURLOPT_RETURNTRANSFER => TRUE,
	CURLOPT_ENCODING       => 'UTF-8'
));
$data = curl_exec($curl);
curl_close($curl);
/*$xml = simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);
//die('<pre>' . print_r($xml], TRUE) . '</pre>');
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
</head>
<body>

<?php foreach ($xml->channel->item as $item) {
	$creator = $item->children('dc', TRUE);
	echo '<h2>' . $item->title . '</h2>';
	echo '<p>Created: ' . $item->pubDate . '</p>';
	echo '<p>Author: ' . $creator . '</p>';
	echo '<p>' . $item->description . '</p>';
	echo '<p><a href="' . $item->link . '">Read more: ' . $item->title . '</a></p>';
}*/
?>

</body>
</html>


