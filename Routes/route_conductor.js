var express=require("express");
var router=express.Router();

//obtenemos el modelo del Usuario con toda la funcionalidad

var Conductor=require('../Models/modelo_conductor').conductor;

//recuperamos todos los usuarios de la base de datos
router.route("/conductor")
.get(function(req,res)
	{
		Conductor.getConductores(function(error,doc)
		{
			if (error)
			 {
			 	console.log(error);
			 }else
			 {
			 	res.render("page/Conductor.html",{listaConductores:JSON.parse(JSON.stringify(doc))});//de la vista
			 }
		});	


	});

//creamos nuevo conductor...........----

router.route("/new_conductor")
.get(function(req,res)
{
	res.render("./modal/nuevoConductor");//mostramos la vista en modal

})
.post(function(req,res)
	{
		var linea={//obtenemos los campos para mandar a la base de datos
			dni:req.body.txtdni,
   	   		nombre:req.body.txtnombre,
       		apellidos:req.body.txtapellido, 
       		telefono:req.body.txttelefono,
      		direccion:req.body.txtdireccion
		};
		Conductor.getConductorNombre(req.body.txtnombre,function(err,doc)
		{
			if (typeof doc !== 'undefined' && doc.length>0)
			 {
			 	res.send('2');
			 }
			 else
			 {
			 	linea.insertConductor(conductor,function(err,documento)
			 		{
			 			//verificamos si se ha insertado correctamente los datos
			 			if (documento && documento.insertId)
			 			 {
			 			 	res.send('1');
			 			 	console.log(documento);
			 			 }
			 			 else
			 			 {
			 			 	res.send('0');
			 			 }
			 		});
			 }
		});
	});

// recupera un conductor(get: recupera el conductor,put: actualiza datos de conductor, delete:elimina datos de conductor)
router.route("/update_conductor/:id")//recogemos de my java------nombre de url y elid
.get(function(req,res)
{
	Conductor.getConductor(req.params.id,function(err,user)
		{
			if (!err)
			 {
			 	var us=JSON.parse(JSON.stringify(user))
			 	res.render("./modal/modificarConductor",{conductor:us})
			 }
			 else
			 {
			 	console.log("no existe");
			 }

		});
})
.put(function(req,res)
	{
		Conductor.getConductor(req.params.id,function(err,user)
			{
				if (err)
				 {
				 	res.send("0");
				 }
				 else
				 {
				 	var conductordat={
				 		idTconductor:req.body.idTconductor,
				 		dni:req.body.txtdni,
			   	   		nombre:req.body.txtnombre,
			       		apellidos:req.body.txtapellido, 
			       		telefono:req.body.txttelefono,
			      		direccion:req.body.txtdireccion
				 	};
				 	console.log(conductordat);
				 	Conductor.updateConductor(conductordat,function(error,documento)
				 		{
				 			if (error)
				 			 {
				 			 	res.send("0");
				 			 }else
				 			 {
				 			 	res.send("1");
				 			 }
				 		});

				 }

			});
	})
.delete(function(req,res)//elimina se encuetra el id
		{
			console.log(req.params.id);
			Conductor.deleteConductor(req.params.id,function(err,data)
				{
					if (data && data.msg== "deleted" || data.msg=="notExist")
					 {
					 	res.send("1");
					 }else
					 {
					 	res.send("0");
					 }
				});
		});

module.exports=router;