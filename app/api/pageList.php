<?php
declare(strict_types=1);

$htmlfiles = glob("../../*.html");
$response = [];

foreach ($htmlfiles as $file) {
	array_push($response, basename($file));
}

echo json_encode($response);