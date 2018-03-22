//llamamos a la instalacio de nuestro mysql
var mysql=require("mysql"),

//hacemos la conexion a la base de datos...
connection = mysql.createConnection(
	{ 
	host:'localhost',
	user:'root',
	password:'',
	database:'dbsolidos'
	}
);

//creamos un objeto JSON para almacenar 
var ciudadanoModel={};

//añadir un nuevo ciudadano ----------
ciudadanoModel.insertCiudadano=function(ciudadanoData,callback)
{
	//primero verificamos la conexion a la base de datos...
	if (connection) 
	{
		//hacemos un query a la base de datos...
		connection.query('INSERT INTO tciudadano SET ?',ciudadanoData,function(error,result)
		{
			if(error)
				{
					throw error;
					//console.log("-----error");
				}else
				{
					callback(null,{"insertId":result.insertId});
					
				}

		});
		
	}

}


//Obtenemos todos los Ciudadanos de la tabla Ciudadano
ciudadanoModel.getCiudadano=function(callback)
{
	//verificamos la conexion a la base de datos 
	if (connection)
	 {
	 	connection.query('SELECT * FROM tciudadano',function(error,rows)
	 		{
	 			if (error)
	 			 {
	 			 	throw error;
	 			 }else
	 			 {
	 			 	callback(null,rows);
	 			 }
	 		});
	 }

} 

module.exports.ciudadano = ciudadanoModel;