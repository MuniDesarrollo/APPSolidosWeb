<?php
include('functions.php');
$id=$_GET["idTciudadano"];


if($resultset=getSQLResultSet("SELECT * FROM `tciudadano` WHERE idTciudadano='$id'"))
{
	while ($row = $resultset->fetch_array(MYSQLI_NUM))
	{
		echo json_encode($row);
	}
}

?>


