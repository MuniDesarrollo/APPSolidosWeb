//llamamos a nuestro Models.. modelo_usuario_personal.js

var UserPersonal=require("../Models/modelo_usuario_personal").usuarioPersonal;

module.exports=function(req,res,next)
{
	if (!req.session.user_id)
	 {
	 	console.log(req.session.user_id);
	 	res.redirect("/");
	 }
	 else
	 {
	 	UserPersonal.getUsuarioPersonal(req.session.user_id,function(err,user)
	 	{
	 		if (err)
	 		 {
	 		 	console.log(err);
	 		 	res.redirect("/");
	 		 }
	 		 else
	 		 {
	 		 	var us=JSON.parse(JSON.stringify(user));
	 		 	res.locals={user:us[0].usuario};
	 		 	next();
	 		 }
	 	});
	 }
}


//-----------------------------------------------
