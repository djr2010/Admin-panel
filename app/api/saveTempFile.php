<?php
declare(strict_types=1);
// Декодируем полученные в формате json данные
$_POST = json_decode(file_get_contents("php://input"), true);

$newFile = "../../temp.html";

if ($_POST["html"]) {
	file_put_contents($newFile, $_POST["html"]);
} else {
	header("HTTP/1.0 400 Bad Request");
}
