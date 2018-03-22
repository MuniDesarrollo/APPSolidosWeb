<?php 

require("conexion.php");
/*
$server = "localhost";
$user = "root";
$pass = "";
$bd = "dbsolidos";
*/
//Creamos la conexión
//$conexion = mysqli_connect($server, $user, $pass,$bd) 
//or die("Ha sucedido un error inexperado en la conexion de la base de datos");

//generamos la consulta

$usu=$_REQUEST["usuario"];
$pass=$_REQUEST["contrasenia"];
$sql = "SELECT usuario,contrasenia FROM tciudadano WHERE usuario='$usu' AND contrasenia='$pass'";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$clientes = array(); //creamos un array

while($row = mysqli_fetch_array($result)) 
{ 
    $usuario=$row['usuario'];
    $contrasenia=$row['contrasenia'];    

    $clientes[] = array('usuario'=> $usuario, 'contrasenia'=> $contrasenia);
}
    
//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  
//Creamos el JSON
$json_string = json_encode($clientes);
echo $json_string;

//Si queremos crear un archivo json, sería de esta forma:
/*
$file = 'C:clientes.json';
file_put_contents($file, $json_string);
  */  
?>