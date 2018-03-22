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
			 	res.render("Conductor.html",{listaConductores:JSON.parse(JSON.stringify(doc))});//de la vista
			 }
		});	


	});

module.exports=router;