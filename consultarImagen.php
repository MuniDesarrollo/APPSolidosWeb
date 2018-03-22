<?PHP
require("conexion.php");
$json=array();
		$idTdetallereporte=$_GET["idTdetallereporte"];
		
		$consulta="select * from tdetallereporte where idTdetallereporte='{$idTdetallereporte}'";
		$resultado=mysqli_query($conexion,$consulta);
		
		while($registro=mysqli_fetch_array($resultado)){
			$result["descripcion"]=$registro['descripcion'];
			//$result["fechareportado"]=$registro['fechareportado'];
			$result["estado"]=$registro['estado'];
			//$result["fecharecogido"]=$registro['fecharecogido'];
			$result["imagen"]=base64_encode($registro['imagen']);
			//$result["longitud"]=$registro['longitud'];
			//$result["latitud"]=$registro['latitud'];
			//$result["idTciudadano"]=$registro['idTciudadano'];

			$json['tdetallereporte'][]=$result;
			//echo $registro['id'].' - '.$registro['nombre'].'<br/>';
		}
		mysqli_close($conexion);
		echo json_encode($json);
?>