//llamamos a la instaacion de nuestro Mysql
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

var conductorModel={};

//obtenemos todos los usuarios en 

conductorModel.getConductores=function(callback)
{
	//verificamos la conexion a la base de datos ...
	if (connection)
	 {
	 	//hacemos un query a la base de  datos a la tabla tconductores
	 	connection.query('SELECT * FROM tconductor ORDER BY idTconductor',function(error,rows)
	 		{
	 				if (error)
	 				 {
	 				 	throw error;
	 				 }
	 				 else
	 				 {
	 				 	callback(error,rows);
	 				 }
	 		});
	 }
}

//obtenemos un conductor por su id
conductorModel.getConductor = function(id,callback)
{
	if (connection) 
	{
		var sql = 'SELECT * FROM tconductor WHERE idTconductor = ' + connection.escape(id);
		connection.query(sql, function(error, row) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}
//obtenemos un conductor por su DNI-------

conductorModel.getConductorDNI=function(dni,callback)
{
	//verificamos la conexion a la base de datsos ....
	if(connection)
	{
		var sql='SELECT * FROM tconductor WHERE dni='+connection.escape(dni);
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
//obtenemos un usuario por su nombre
conductorModel.getConductorNombre = function(nombre,callback)
{
	if (connection) 
	{
		var sql = 'SELECT * FROM tconductor WHERE nombre = ' + connection.escape(nombre);
		connection.query(sql, function(error, row) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}

//añadir un nuevo ciudadano..........................
conductorModel.insertConductor=function(conductorData,callback)
{
	//verificamos la conexion a la base de datos ....
	if (connection)
	 {
	 	connection.query('INSERT INTO tconductor SET ?',conductorData,function(error,result)
	 	{
	 		if (error)
	 		 {
	 		 	throw error;
	 		 }
	 		 else
	 		 {
	 		 	callback(null,{"insertId":result.insertId});	
	 		 }
	 	} );
	 }
}

//funcion que actualiza la tabla tconductor

conductorModel.updateConductor=function(conductorData,callback)
{
//verificamos la conexion a la base de datos .........
if (connection)
 {
 	var sql='UPDATE tconductor SET dni='+connection.escape(conductorData.dni)+','+
 	'nombre='+connection.escape(conductorData.nombre)+','+
 	'apellido='+connection.escape(conductorData.apellido)+','+
 	'telefono='+connection.escape(conductorData.telefono)+','+
 	'direccion='+connection.escape(conductorData.direccion)+
 	'WHERE idTconductor='+conductorData.idTconductor;

 	//ejecutamos la query... a la base de datos 
 	connection.query(sql,function(error,result)
 		{
 			if (error)
 			 {
 			 	throw error;
 			 }else
 			 {
 			 	sql=null;
 			 	delete sql;
 			 	callback(null,{"msg":"success"});
 			 }
 		});
 }
}


//Eliminamos un conductor por medio de su id

conductorModel.deleteConductor=function(idTconductor,callback)
{

	//verificamos la conexion a la base de datos 
	if (connection)
	 {
	 	var sqlExists='SELECT * FROM tconductor WHERE idTconductor= '+connection.escape(idTconductor);
	 	console.log(sqlExists);
	 	//ejecutamos la query---
	 	connection.query(sqlExists, function(err,row)
	 		{
	 			if (row)
	 			 {
	 			 	var sql='DELETE * FROM tconductor WHERE idTconductor= '+connection.escape(idTconductor);
	 			 	connection.query(sql,function(error,result)
	 			 		{
	 			 			if (error)
	 			 			 {
	 			 			 	throw error;
	 			 			 }
	 			 			 else

	 			 			 {
	 			 			 	
	 			 			 	callback(null,{"msg":"notExist"});
	 			 			 }
	 			 		});
	 			 }
	 		});
	 }
}

//exportamos los datos ............
module.exports.conductor=conductorModel;