<?php
	if ($_POST['login']!="" && $_POST['contrasenia']!="") {
		//inicio la sesion
		session_start();
		if(!class_exists('ctrabajador'))
		{
			include("../clases/ctrabajador.php");
		}
		$OTrabajador = new ctrabajador('','','',$_POST['login'],$_POST['contrasenia'],'','','',1);
		/*$servidor="DESKTOP-2VJKV7A\SQLEXPRESS";
		$ConnectionInfo = array( "Database"=>"transitovial", "UID"=>"user", "PWD"=>"1234");
	    $Conexion = sqlsrv_connect( $servidor,$ConnectionInfo);


	    $cadenaSql="select *from T_trabajador where estado=1 and Login='cesar'and Contrasenia='cesar'";
		$rs1=sqlsrv_query( $Conexion, $cadenaSql); 		*/
         // if($OTrabajador->BuscarTrabajadores())
          //	echo "exito cadena";
		//$rs=sqlsrv_fetch_array($OTrabajador->BuscarTrabajadores(),SQLSRV_FETCH_ASSOC);
		$rs=$OTrabajador->BuscarTrabajadores()->fetch(PDO::FETCH_ASSOC);
		if(!$rs){
		  $_SESSION["autentificado"] = 'no';
		  //echo "falso";
		  header("Location: index.php?error=si");
		}
		else{
			//echo "verdad";
			
				$_SESSION["autentificado"] = 'si';
				$_SESSION["Cod_trabajador"] = $rs['Cod_trabajador'];
				$_SESSION["tipoUsuario"] = $rs['Tipo_trabajador'];
				
				$_SESSION["nombres"] =$rs['Nombre_trabajador'];
				//echo $rs->Nombre_trabajador;
				header("Location: Principal.php?page=Principal&pagesecond=ninguno");
			
		}	
	}
	else{
		header("Location: index.php?error=si");
	}
?>