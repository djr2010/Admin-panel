<?php
declare(strict_types=1);
session_start();
if ($_SESSION["auth"] == true){
	$_SESSION["auth"] = false; //Выход из admin
	unset($_SESSION["auth"]);//Удаление значения auth
	session_destroy();// Завершение сессии
}


































































