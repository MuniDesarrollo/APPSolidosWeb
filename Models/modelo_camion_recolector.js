//llamamos a la instalacion de nuestro mysql

var mysql=require("mysql");
//hacemos la conexion a la base de datos 

connection=mysql.createConnection(
	{
		host:'localhost',
		user:'root',
		password:'',
		database:'dbsolidos'
	}
	);

//ceamos un objeto JSON para almacenar los datos .....

var camionRecolectorModel={};

//obtenemos todos los camiones recolectores-- de la base de dats ....

camionRecolectorModel.getCamionRecolector=function(callback)
{
	//verificamos la conexion a la base de datos 
	if (connection)
	 {
	 	connection.query('SELECT * FROM tcamionrecolector ORDER BY idTcamionRecolector',function(error,rows)
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

//obtenemos los vehiculos por su placa ......
camionRecolectorModel.getCamionRecolectorPlaca=function(placa,callback)
{
	//verificamos la conexion a la base de datos ...
	if (connection)
	 {//hacemos una query a la tabla Tcamionrecolector
	 	var sql='SELECT * FROM tcamionrecolector WHERE placa='+connection.escape(placa);
	 	connection.query(sql,function(error,row)
	 		{
	 			if (error) 
	 			{
	 				throw error;
	 			}else
	 			{
	 				sql=undefined;
	 				delete sql;
	 				callback(null,row);
	 			}
	 		});
	 }
}

camionRecolectorModel.insertCamionRecolector=function(camionRecolectorData,callback)
{
	//primero verificamos la conexion a la base de datos ...
	if (connection)
	 {
	 	//hacemos un query a la base de datos o consulta...........
	 	connection.query('INSERT INTO tcamionrecolector SET ?',camionRecolectorData,function(error, result)
	 		{
	 			if (error)
	 			 {
	 			 	throw error;
	 			 }
	 			 else
	 			 {
	 			 	callback(null,{"insertId":result.insertId});
	 			 }
	 		});
	 }
}

// Actualizamos la tabla camion recolector funcion Update

camionRecolectorModel.updateCamionRecolector=function(camionRecolectorData,callback)
{
	//verificamos la conexio a la base de datos 
	if (connection)
	 {
	 	var sql='UPDATE tcamionrecolector SET placa='+ connection.escape(camionRecolectorData.placa) + ',' +  
		'modelo = ' + connection.escape(camionRecolectorData.modelo) +',' + 
		'numeroRuta = ' + connection.escape(camionRecolectorData.numeroRuta) +',' + 
		'estado = ' + connection.escape(camionRecolectorData.estado) +
		' WHERE idTcamionRecolector = ' + camionRecolectorData.idTcamionRecolector;

		connection.query(sql,function(error,result)
			{
				if (error)
				 {
				 	throw error;
				 }else
				 {
				 	sql=null;
				 	delete sql;
				 	callback(null,{"msg":"seccess"});
				 }
			});
	 }
}

//eliminar un camion recolector......

camionRecolectorModel.deleteCamionrecolector=function(idTcamionRecolector,callback)
{
	//verificamos la connexion a la bse de datso 
	if (connection) 
	{
		var sqlExists='SELECT * FROM tcamionrecolector WHERE idTcamionRecolector='+ connection.escape(idTcamionRecolector);
		console.log(sqlExists);
		connection.query(sqlExists,function(err,row)
			{
				//verificamos si existe el id delcamion recolector

				if (row)
				 {
				 	var sql='DELETE FROM tcamionrecolector WHERE idTcamionRecolector='+connection.escape(idTcamionRecolector);
				 	connection.query(sql,function(error,result)
				 		{
				 			if (error) 
				 			{
				 				throw error;
				 			}else
				 			{
				 				sql=null;
				 				sqlExists=null;
				 				delete sql;
				 				callback(null,{"msg":"deleted"});
				 			}
				 		});
				 }else
					{
						sqlExists=null;
						delete sqlExists;
						callback(null,{"msg":"notExist"});
					}
			});
	}
}

//exportamos los objeto para tener disponible en la srutas

module.exports.camionRecolector=camionRecolectorModel;
