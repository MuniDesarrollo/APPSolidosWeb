var express=require("express");
var router=express.Router();
//obtenemos el modelo del camion recolectro con toda la funcionalidad
var Camion = require('../Models/modelo_camion_recolector').camionRecolector;


//hacemos una lsita de todos los camiones recoectores

router.ruote("/camiones")
.get(function(req,res)
	{
		Camion.getCamionRecolector(function(error,doc)
		{
			if (error)
			 {
			 	console.log("error");
			 }
			 res.render("")
		});
	});

