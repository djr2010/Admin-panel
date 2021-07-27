<?php
declare(strict_types=1);
session_start();
if ($_SESSION["auth"] != true){
	header("HTTP/1.0 403 Forbidden");
	die;
}
// Декодируем полученные в формате json данные
$_POST = json_decode(file_get_contents("php://input"), true);

$new_file = "../../yfuy1n254ub_khj87.html";

if ($_POST["html"]) {
	file_put_contents($new_file, $_POST["html"]);
} else {
	header("HTTP/1.0 400 Bad Request");
}
