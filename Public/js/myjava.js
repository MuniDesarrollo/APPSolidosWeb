
//validamos inicio de sesion----
function login(){
		$.ajax({
				type: 'post',
				data: $(frm_login).serialize(),//enviamos los datos al servidor
				url: '/sesion',
				success: function(data){
					 alert(data);
						if (data=="0") 
						{

						}else
						{
							var url="/page/Principal2";
							location.href=url;
						}
				}
			});
		
}


//Nuevo personal Usuario-----------------

function NuavoUsuarioPersonal()
{
	$.ajax(
		{
			type:'get',
			data:'cod=0',
			url:'new_UsuarioPersonal',
			success:function(data)
					{
						$('#DatosUsuarioPersonal').html(data);
						$('#myModalUsuarioPersonal').modal({
							show:true,
							backdrop:'static',
						});			
					}
		});
}

//lista de Personal..Usuario------------------------------
