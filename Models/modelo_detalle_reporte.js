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
var detalleReporteModel={};

//añadir un nuevo ciudadano ----------
detalleReporteModel.insertDetalleReporte=function(detalleReporteData,callback)
{
	//primero verificamos la conexion a la base de datos...
	if (connection) 
	{
		//hacemos un query a la base de datos...
		connection.query('INSERT INTO tdetallereporte SET ?',detalleReporteData,function(error,result)
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

//actualizar la abla detalle reporte

detalleReporteModel.updateDetalleReporte=function(detalleReporteData,callback)
{
	//verificamos la conexion a la base de datos-----
	if (connection)
	 {
	 	var sql='UPDATE tdetallereporte SET fechareportado = ' + 'estado = ' + connection.escape(detalleReporteData.estado) +',' + 
		'fecharecogido = ' + connection.escape(detalleReporteData.fecharecogido) +',' + 
		'idTcamionRecolector = ' + connection.escape(detalleReporteData.idTcamionRecolector) +
		' WHERE idTdetallereporte = ' + detalleReporteData.idTdetallereporte;
	 
		connection.query(sql, function(error,result)
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


module.exports.detalleReporte = detalleReporteModel;