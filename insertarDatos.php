<?php 

require("conexion.php");

$dni=$_REQUEST['cdni'];
$nombre=$_REQUEST['cnombre'];
$apellidos=$_REQUEST['capellidos'];
$correo=$_REQUEST['ccorreo'];
$usuario=$_REQUEST['cusuario'];
$contrasenia=$_REQUEST['ccontrasenia'];

//cifrado de contraseña-----

$cifrado_pass=password_hash($contrasenia,PASSWORD_DEFAULT);

$query="INSERT INTO tciudadano (dni, nombre, apellidos, correo, usuario, contrasenia)
		VALUES('$dni','$nombre','$apellidos','$correo','$usuario','$cifrado_pass')";

		mysqli_query($conexion,$query) or die(mysqli_error());

		mysqli_close($conexion);

 ?>