<?php

$server = "localhost";
$user = "root";
$pass = "";
$bd = "dbsolidos";

$conexion=mysqli_connect($server,$user,$pass,$bd);
if (mysqli_connect_errno()) {
	echo "conexion fallida a Mysql: ".mysqli_connect_error();
}

?>