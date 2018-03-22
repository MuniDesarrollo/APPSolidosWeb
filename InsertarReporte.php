<?PHP

require("conexion.php");
$json['img']=array();
	//if(true){)
	if(isset($_POST["btn"])){

		
		$ruta="imagenes";
		$archivo=$_FILES['imagen']['tmp_name'];
		echo 'Archivo';
		echo '<br>';
		echo $archivo;
		$nombreArchivo=$_FILES['imagen']['name'];
		echo 'Nombre Archivo';
		echo '<br>';
		echo $nombreArchivo;
		move_uploaded_file($archivo,$ruta."/".$nombreArchivo);
		$ruta=$ruta."/".$nombreArchivo;

		$fechaReporte=$_POST['fechareportado'];
		//$estado=$_POST['estado'];
		$fecharecogido=$_POST['fecharecogido'];

		$longitud=$_POST['longitud'];
		$latitud=$_POST['latitud'];
		$tipoResiduo=$_POST['tipo'];

		echo '<br>';
		echo 'Fecha de reporte: ';
		echo $fechaReporte;
		/*echo '<br>';
		echo 'Estado: ';
		echo $estado;*/
		echo '<br>';
		echo 'Fecha Recogido: ';
		echo $fecharecogido;
		echo '<br>';
		echo 'ruta :';
		echo $ruta;
		echo '<br>';
		echo 'Tipo Imagen: ';
		echo ($_FILES['imagen']['type']);
		echo '<br>';
		echo '<br>';
		echo "Imagen: <br><img src='$ruta'>";
		echo '<br>';
		echo '<br>';
		echo 'imagen en Bytes: ';
		echo '<br>';
		echo '<br>';
		//echo $bytesArchivo=file_get_contents($ruta);
		echo '<br>';
		
		echo 'Longitud: ';
		echo $longitud;
		echo '<br>';

		echo 'Latitud: ';
		echo $latitud;
		echo '<br>';
		
		
		$num3=1;
		$bytesArchivo=file_get_contents($ruta);
		/*$sql="INSERT INTO tdetallereporte(fechareportado,fecharecogido,imagen,rutaImagen,longitud,latitud,idTciudadano,idTresiduo,idTcamionRecolector) VALUES (?,?,?,?,?,?,?,?,?)";
		$stm=$conexion->prepare($sql);
		$stm->bind_param('ssssddiii',$fechaReporte,$fecharecogido,$bytesArchivo,$ruta,$longitud,$latitud,$num1,$num2,$num3);*/
		
		$stament=$conexion->prepare("CALL pa_InsertarReporte(?,?,?,?,?,?,?,?)");
		$stament->bind_param('ssssddsi',$fechaReporte,$fecharecogido,$bytesArchivo,$ruta,$tipoResiduo,$latitud,$longitud,$num3);
		//$stament->execute();

		if($stament->execute()){
			echo 'imagen Insertada Exitosamente ';
			$consulta="select * from tdetallereporte where estado='1'";
			$resultado=mysqli_query($conexion,$consulta);
			echo '<br>';
			while ($row=mysqli_fetch_array($resultado)){
				echo $row['idTdetallereporte'].' - '.$row['fechareportado'].'<br/>';
				array_push($json['img'],array('idTdetallereporte'=>$row['idTdetallereporte'],'fechareportado'=>$row['fechareportado'],'estado'=>$row['estado'],'fecharecogido'=>$row['fecharecogido'],'photo'=>base64_encode($row['fechareportado']),'ruta'=>$row['rutaImagen'],'longitud'=>$row['longitud'],'latitud'=>$row['latitud'],'idTciudadano'=>$row['idTciudadano'],'fechareportado'=>$row['fechareportado'],'idTcamionRecolector'=>$row['idTcamionRecolector']));
			}
			mysqli_close($conexion);
			
			echo '<br>';
			echo 'Objeto JSON 2';
			echo '<br>';
			echo json_encode($json);
		}
	}
?>