var express=require("express");
var router=express.Router();

//obtenemos el modelo del Usuario con toda la funcionalidad

var Conductor=require('../Models/modelo_ciudadano').ciudadano;

//recuperamos todos los usuarios de la base de datos
router.route("/ciudadano")
.get(function(req,res)
	{
		Conductor.getConductores(function(error,doc)
		{
			if (error)
			 {
			 	console.log(error);
			 }else
			 {
			 	res.render("Ciudadano.html",{listaCiudadano:JSON.parse(JSON.stringify(doc))});//de la vista
			 }
		});	


	});

module.exports=router;