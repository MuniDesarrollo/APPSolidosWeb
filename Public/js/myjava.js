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
							var url="/Principal2";
							location.href=url;
						}
				}
			});
		
}