////llamamos a la instaacion de nuestro Mysql
var mysql=require("mysql");

//hacemos la conexion a la base de datos ....
connection=mysql.createConnection(
	{
		host:'localhost',
		user:'root',
		password:'',
		database:'dbsolidos'
	}
);

//creamos un objeto JSON para almacena rlos datos

var detalleCamionModel={};

detalleCamionModel.getDetallecamion=function(callback)
{
	//verificamos si ahy conexion a la base de datos
	if (connection)
	 {
	 	//hacemos una consulata a la base de datos para listar 
	 	connection.qury('SELECT tcn.dni,tcn.nombre,tcn.apellido,tcm.placa,tcm.modelo FROM tdetallecamion tdc INNER JOIN tconductor tcn ON tdc.idTdetalleCamion=tcn.idTconductor INNER JOIN tcamionrecolector tcm ON tdc.idTdetalleCamion=tcm.idTcamionRecolector',function(error,rows)
	 		{
	 			if (error)
	 			 {
	 			 	throw error;
	 			 }else
	 			 {
	 			 	callback(error,rows);
	 			 }
	 		});
	 }

}