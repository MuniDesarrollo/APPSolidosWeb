<?PHP
require("conexion.php");
$json=array();
	if(isset($_GET["estado"])){
		$estado=$_GET["estado"];
				
		$consulta="SELECT * FROM tdetallereporte WHERE estado= '{$estado}'";
		$resultado=mysqli_query($conexion,$consulta);
			
		if($registro=mysqli_fetch_array($resultado)){
			//datos que se mostrara en el formato json......
			$result["descripcion"]=$registro['descripcion'];
			$result["fechareportado"]=$registro['fechareportado'];
			$result["estado"]=$registro['estado'];
			//$result["fecharecogido"]=$registro['fecharecogido'];
			$result["imagen"]=base64_encode($registro['imagen']);
			//$result["longitud"]=$registro['longitud'];
			//$result["latitud"]=$registro['latitud'];
			//$result["idTciudadano"]=$registro['idTciudadano'];

			$json['tdetallereporte'][]=$result;
		}else{
			$result["descripcion"]='no registra';
			$result["fechareportado"]='no registra';
			$result["estado"]=0;
			$result["fecharecogido"]='no registra';
			$result["imagen"]='no registra';
			$result["longitud"]=0;
			$result["latitud"]=0;

			$json['tdetallereporte'][]=$result;
		}
		
		mysqli_close($conexion);
		echo json_encode($json);
	}
	else{
		$resultar["success"]=0;
		$resultar["message"]='Ws no Retorna';
		$json['tdetallereporte'][]=$resultar;
		echo json_encode($json);
	}
?>