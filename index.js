//El siguiente código es un ejemplo de servidor web escrito en Node.js.
var express=require("express");
var bodyParser=require("body-parser");
var mysql=require("mysql");
var session=require("express-session");
var net = require('net');
const http = require('http');


var port=process.env.PORT || 7000;


var app=express();

var server =require('http').Server(app);
var io=require('socket.io').listen(server);

//tcp socket server

var clients = [];//Arduinos conectados








//var serialport=require("serialport").SerialPort;

//var myPort=new serialport("COM3",{

  //baudrate: 19200,
  //parser: serialport.parsers.readline("\r\n")
//});

//myPort.on('open',onOpen);
//myPort.on('data',onData);

var conexion=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'dbsolidos'
});



conexion.connect(function(err,res){
	if(err) console.log("No se puede conectar a bd"+err);
	else
	console.log("Conectado a bd");

});


app.use(bodyParser.json({limit: '50mb'}));// para peticiones aplicaciones json
app.use(bodyParser.urlencoded({extended: true,limit:'50mb', parameterLimit:50000}));

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}));


// conexion base de datos




//carpeta estatica
app.use("/public",express.static('public'));



//carpeta por defecto de las vistas
//app.set("view engine","html");

// Iniciar sesion

var cons = require('consolidate');
var path = require('path');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// ruta pagina inicial (login)
app.get("/",function(req,res){
 
 res.render("index.html"); 
});


// verificar si se ha iniciado sesion
var Ciudadano=require("./Models/modelo_ciudadano").ciudadano;
var detalleReport=require("./Models/modelo_detalle_reporte").detalleReporte;
io.on('connection', function (socket) {
	console.log('alguien se ha conectado: '+socket.id);
    //console.log("CONEXION IO:"+clients);
   socket.on('my event',function(data){
	//var data1=JSON.stringify(data);

var lati=data.latitud.split(" :");
var longi=data.longitud.split(" :");


var detalleRep1={

  fechareportado:data.freporte,
  estado:data.estado,
  fecharecogido:data.frecogido,
  imagen:data.foto,
  rutaImagen:data.rutaImagen,
  latitud:lati[1],
  longitud:longi[1],
  descripcion:data.descripcion,
  idTcamionRecolector:data.idCamion,
  idTCiudadano:data.idCiudadano

};
detalleReport.insertDetalleReporte(detalleRep1,function(err,documento)
  {
    //si el usuario se ha insertado correctamente mostramos su info
            if(documento )
            {
              //res.send('1');

              console.log(documento);
            }
            else
            {
              //res.send('0');
              console.log(err);
            }
  });
/*
	console.log(data.freporte);
	console.log(data.estado);
	console.log(data.frecogido);
	console.log(data.foto);
	console.log(data.rutaImagen);
	console.log(data.longitud);
	console.log(data.latitud);
	console.log(data.descripcion);
	console.log(data.idCamion);
	console.log(data.idCiudadano);
	
*/

});
   socket.on('my ciudadano',function(data)
   {
   	  //console.log("no hay datos");
   	  var ciudadano1= {
   	   dni:data.dni,
   	   nombre:data.nombre,
   	   apellidos:data.apellidos,
   	   correo:data.correo,
   	   usuario:data.usuario,
   	   contrasenia:data.contrasenia
   	        
   };

   Ciudadano.insertCiudadano(ciudadano1,function(err,documento){
          
            //si el usuario se ha insertado correctamente mostramos su info
            if(documento )
            {
              //res.send('1');

              console.log(documento);
            }
            else
            {
              //res.send('0');
              console.log(err);
            }

   		console.log(data.dni);
   		console.log(data.nombre);
   		console.log(data.apellidos);
   		console.log(data.correo);
   		console.log(data.usuario);
   		console.log(data.contrasenia);
   });
	//io.sockets.emit("Clientes",clients)1;	

});
});


io.sockets.on('disconnect', function() {
// handle disconnect
	io.sockets.disconnect();
	io.sockets.close();

});

server.listen(port,function(){
	console.log("servidor HTTP funcionando puerto 8081");

});
//agregamos la rutas de nuestro carpeta Route
// rutas
var route_usuario=require("./Routes/route_usuario_login");
app.use(route_usuario);

var route_conductor1=require("./Routes/route_conductor");
app.use(route_conductor1);