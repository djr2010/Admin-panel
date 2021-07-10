<?php
declare(strict_types=1);
// Декодируем полученные в формате json данные
$_POST = json_decode(file_get_contents("php://input"), true);

$file = "../../yfuy1n254ub_khj87.html";

if (file_exists($file)) {
	unlink($file);
} else {
	header("HTTP/1.0 400 Bad Request");
}
