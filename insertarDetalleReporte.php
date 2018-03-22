<?php 

require("conexion.php");


//obteniendo los atributos de la url mediante metofod get

$fechaRep=$_GET['fechareportado'];
$fechareportado=date("Y-m-d",strtotime($fechaRep));
$fechaRec=$_GET['fecharecogido'];
$fecharecogido=date("Y-m-d",strtotime($fechaRec));
$imagen=$_GET['imagen'];
$path = "imagenes/$fechareportado.jpg";
$longitud=$_GET['longitud'];
$latitud=$_GET['latitud'];
$descripcion=$_GET['descripcion'];
$idTciudadano=1;
$url = "imagenes/".$fechareportado.".jpg";
file_put_contents($path,base64_decode($imagen));
$bytesArchivo=file_get_contents($path);
$sql="INSERT INTO tdetallereporte(fechareportado,fecharecogido,imagen,rutaImagen,longitud,latitud,descripcion,idTciudadano) VALUES (?,?,?,?,?,?,?,?)";
	$stm=$conexion->prepare($sql);
	$stm->bind_param('ssssddsi',$fechaRep,$fechaRec,$bytesArchivo,$url,$longitud,$latitud,$descripcion,$idTciudadano);

if ($stm->execute()) {
	
	//echo "se registro correctamente";
	$json=array();
				
		$consulta="select * from tdetallereporte";
		$resultado=mysqli_query($conexion,$consulta);
		
		if($registro=mysqli_fetch_array($resultado)){
			$result["descripcion"]=$registro['descripcion'];
			$result["fechareportado"]=$registro['fechareportado'];
			$result["estado"]=$registro['estado'];
			$result["fecharecogido"]=$registro['fecharecogido'];
			$result["imagen"]=base64_encode($registro['imagen']);
			$result["longitud"]=$registro['longitud'];
			$result["latitud"]=$registro['latitud'];
			$result["idTciudadano"]=$registro['idTciudadano'];

			$json['tdetallereporte'][]=$result;
			//echo $registro['id'].' - '.$registro['nombre'].'<br/>';
		}
		mysqli_close($conexion);
		echo json_encode($json);

}
else
{
	echo "no se registro";
}


 ?>