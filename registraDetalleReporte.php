<?PHP
//require("conexion.php");
$hostname_localhost="localhost";
$database_localhost="bd_usuario";
$username_localhost="root";
$password_localhost="";
$conexion=mysqli_connect($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
	$documento=$_GET['documento'];
		$nombre=$_GET['nombre'];
		$profesion=$_GET['profesion'];
	//$imagen = $_GET["imagen"];
	//$path = "imagenes/$nombre.jpg";
	//$url = "http://$hostname_localhost/ejemploBDRemota/$path";
	//$url = "imagenes/".$nombre.".jpg";
	//file_put_contents($path,base64_decode($imagen));
	//$bytesArchivo=file_get_contents($path);
	$sql="INSERT INTO usuario VALUES (?,?,?)";
	$stm=$conexion->prepare($sql);
	$stm->bind_param('iss',$documento,$nombre,$profesion);
		
	if($stm->execute()){
		echo "registra";
	}else{
		echo "noRegistra";
	}
	
	mysqli_close($conexion);


?>