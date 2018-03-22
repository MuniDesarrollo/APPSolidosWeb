<?php include ('functions.php');
//obtenemos los datos de la tabla tciudadano...de la url.................
$dni=$_GET['dni'];
$nombre=$_GET['nombre'];
$apellidos=$_GET['apellidos'];
$correo=$_GET['correo'];
$usuario=$_GET['usuario'];
$contraseña=$_GET['contrasenia'];

//insertamos los datos obtenidos de la url a la tablatciudadano en la base de datos tciudadano
ejecutarSQLCommand("INSERT INTO  `tciudadano` (dni, nombre, apellidos, correo, usuario, contrasenia)
VALUES ('$dni','$nombre' ,'$apellidos','$correo','$usuario','$contraseña')

 ON DUPLICATE KEY UPDATE `dni`= '$dni',`nombre`= '$nombre',
`apellidos`='$apellidos', `correo`= '$correo', `usuario`= '$usuario', `contrasenia`= '$contraseña';");


///funcion insertar  detalle reporte del ciudadano.-.-.-.-.-.-.-.-.-.-...................

function InsertarDetalleReporte()
{
	$fechaReporte=$_GET['fechareportado'];
	$estado=$_GET['estado'];
	$fechaRecoleccion=$_GET['fecharecogido'];
	$imagen=$_GET['imagen'];
	$ubicacion=$_GET['ubicacion'];
	$longitud=$_GET['longitud'];
	$latitud=$_GET['latitud'];

//Insertamos los datos en el reporte detalle---------------
	ejecutarSQLCommand("INSERT INTO 'tdetallereporte'(fechareportado, estado, fecharecogido, imagen, ubicacion, longitud, latitud)
						VALUES('$fechareportado','$estado','$fecharecogido','$imagen','$ubicacion','$longitud','$latitud')
						ON DUPLICATE KEY UPDATE 'fechareportado'='$fechareportado','estado'='$estado','fecharecogido'='$fecharecogido','imagen'='$imagen';");
}


 ?>