//hacemos una instancia a nuestra mysql

var mysql=require("mysql");

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
var usuarioPersonalModel={};

//añadir un nuevo usuario personal-----------

usuarioPersonalModel.insertUsuarioPersonal=function(usuarioPersonalData,callback)
{
//veriificamos la conexion al abase de datos
if (connection) 
{
	//hacemos una insert a la tabala tpersonal
	connection.query('INSERT INTO tpersonal SET ?',usuarioPersonalData,function(error,result)
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

//validamos el acceso al sistema 

usuarioPersonalModel.validarUsuarioPersonal=function(usuarioPersonalData,callback)
{
	//validamos la conexion a la base de datos
	if (connection)
	 {
	 	var sql='SELECT * FROM tpersonal WHERE usuario='+connection.escape(usuarioPersonalData.usuario)+'AND'+
	 	'contrasenia='+connection.escape(usuarioPersonalData.contrasenia)

	 	connection.query(sql,function(error,row)
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