function login(){
		$.ajax({
				type: 'POST',
				data: 'codUsuario=0',
				url: '/sesion',
				success: function(data){
						$('#DatosUsuario').html(data);
						$('#myModal').modal({
								show:true,
								backdrop:'static',
						});
				}
			});
		
}
function ModificarTrabajador(idUsuario){
		$.ajax({
				type: 'POST',
				data: 'idUsuario='+idUsuario,
				url: '../scriptTrabajador/ModificarTrabajador.php',
				success: function(data){
						$('#DatosUsuario').html(data);
						$('#myModal').modal({
								show:true,
								backdrop:'static',
						});
				}
			});
		
}
function EliminarTrabajador(idUsuario){
	if(confirm('Esta seguro de eliminar a este usuario?')){
		var url1 = document.URL;
		$.ajax({
				type: 'POST',
				data: 'idUsuario='+idUsuario,
				url: '../scriptTrabajador/EliminarTrabajador.php',
				success: function(data){
					// alert(data);
					if(data=='1'){
                    	alert('Usuario eliminado correctamente');
						location.href=url1;
                    }
					else if(data=='0'){
						alert('Error al eliminar al usuario');
					}
				}
			});
	}
}


function guardarTrabajador(opcion){
if(window.confirm('Esta seguro de guardar los datos?')){
	var url1 = document.URL;
	if(opcion=="NUEVO"){

		$.ajax({
			type: 'POST',
			data: $(formNuevoUsuario).serialize(),
			url: '../scriptTrabajador/InsertarTrabajador.php',
			success: function(data){
				alert(data);
				if(data == 'existe'){
					$('#mensaje').html('<p class="alert alert-danger">Espere!, El codigo de usuario ya existe!!!, ingrese otro por favor.</p>');
				}
				else if(data=='1'){
                $('#mensaje').html('<p class="alert alert-success">Datos guardados correctamente.</p>');
				
				$('#cbTipoUsuario > option[value="0"]').attr('selected', 'selected');
				$('#txtCodUsuario').val('');
				$('#txtContrasenia').val('');
				
				}
				else if(data=='0'){
                $('#mensaje').html('<p class="alert alert-danger">Error al guardar los datos.</p>');
				}
			}
		});
		}
		else if(opcion=="MODIFICAR"){	
			$.ajax({
				type: 'POST',
				data: $(formModificarUsuario).serialize(),
				url: '../scriptTrabajador/UModificarTrabajador.php',
				success: function(data){
				// alert(data);	
					if(data=='1'){
		                $('#mensaje').html('<p class="alert alert-success">Datos guardados correctamente.</p>');
						$('#cbTipoUsuario > option[value="0"]').attr('selected', 'selected');
						$('#txtCodUsuario').val('');
						$('#txtContrasenia').val('');
						
					}
					else if(data=='0'){
	                $('#mensaje').html('<p class="alert alert-danger">Error al guardar los datos.</p>');
					}
					
				}
			});
		}
	}
}

function marcarChb(cual,seco){
if($("input[name='"+cual+"[]']:checked").val())
	$('input:checkbox[name="'+seco+'\[\]"]').prop('checked', true);
else 
    $('input:checkbox[name="'+seco+'\[\]"]').prop('checked', false);
}



function CambiarEstadoTrabajador(idUsuario,estado){
	if(estado=='MQ=='){
		if(confirm('Esta seguro de denegar el acceso al usuario?')){
			var url1 = document.URL;
			$.ajax({
					type: 'POST',
					data: 'idUsuario='+idUsuario+'&estado='+estado,
					url: '../scriptTrabajador/CambiarEstadoTrabajador.php',
					success: function(data){
						if(data=='1'){
	                    	alert('Acceso denegado correctamente');
							location.href=url1;
	                    }
						else if(data=='0'){
							alert('Error al denegar acceso al usuario');
						}
					}
				});
		}
	}
	else if(estado=='MA=='){
		if(confirm('Esta seguro de conceder el acceso al usuario?')){
			var url1 = document.URL;
			$.ajax({
					type: 'POST',
					data: 'idUsuario='+idUsuario+'&estado='+estado,
					url: '../scriptTrabajador/CambiarEstadoTrabajador.php',
					success: function(data){
						if(data=='1'){
	                    	alert('Acceso concedido correctamente');
							location.href=url1;
	                    }
						else if(data=='0'){
							alert('Error al conceder el acceso al usuario');
						}
					}
				});
		}
	}
}