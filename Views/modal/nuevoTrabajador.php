<?php
if(!class_exists('cusuario'))
{
    include("../../clases/ctrabajador.php");
}
?>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header box box-success box-solid">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Nuevo Trabajador</h4>
            </div>
            <form role="form" id="formNuevoUsuario" name="formNuevoUsuario" action="JavaScript:guardarTrabajador('NUEVO')">
                <div class="modal-body">
                    <div class="form-group input-group" id="fgNroDoc">
                        <span class="input-group-addon">Codigo.</span>
                        <input type="text" id="txtCodigo" name="txtCodigo" class="form-control" placeholder="Codigo de trabajador"   maxlength=""  required>
                    </div>
                    <div class="form-group input-group" id="fgNroDoc">
                        <span class="input-group-addon">Nombre.</span>
                        <input type="text" id="txtNombre" name="txtNombre" class="form-control" placeholder="Nombre de Trabajador"   maxlength=""  required>
                    </div>
            
                    <div class="form-group input-group" id="fgNroDoc">
                        <span class="input-group-addon">DNI</span>
                        <input type="text" id="txtDni" name="txtDni" class="form-control" placeholder="DNI del Trabajador"   maxlength=""  required>
                    </div>
                    
                    <div class="form-group input-group" id="fgCodUsuario">
                        <span class="input-group-addon">Usuario</span>
                        <input type="text" id="txtLogin" name="txtLogin" class="form-control" placeholder="Usuario"   maxlength="15"  required>
                    </div>
                    <div class="form-group input-group" id="fgContrasenia">
                        <span class="input-group-addon">Contraseña</span>
                        <input type="text" id="txtContrasenia" name="txtContrasenia" class="form-control" placeholder="Contraseña"   maxlength="30"  required>
                    </div>
                    <div class="form-group input-group" id="fgContrasenia">
                        <span class="input-group-addon">Telefono</span>
                        <input type="text" id="txtTelefono" name="txtTelefono" class="form-control" placeholder="Telefono"   maxlength="30"  required>
                    </div>
                    <div class="form-group input-group" id="fgContrasenia">
                        <span class="input-group-addon">Direccion</span>
                        <input type="text" id="txtDireccion" name="txtDireccion" class="form-control" placeholder="Direccion"   maxlength="30"  required>
                    </div>
                    <div class="form-group input-group"  id="fgCargo">
                        <span class="input-group-addon">Tipo</span>
                        <select class="form-control" id="cbTipoUsuario" name="cbTipoUsuario" >
                            <!-- <option value="0">Escoja una opción</option> -->
                            <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                            <option value="OPERACIONES">OPERACIONES</option>
                           
                        </select>
                    </div>
                    <div class="form-group input-group" id="fgContrasenia">
                        <span class="input-group-addon">Habilitado</span>
                        
                        <input type="checkbox" id="chbHabilitado" name="chbHabilitado"> 
                    
                    </div>
                    
                     <div class="panel panel-default">
                        <div class="panel-heading">
                            Privilegios
                        </div>
                        <div class="panel-body">
                          <div class="row">
                            <!-- /. modulo Mantenimiento -->
                            <div class="col-xs-12 col-sm-6">
                                <div class="panel panel-default" >
                                    <div class="panel-heading">
                                        Mantenimiento --->
                                        <label class="checkbox-inline">
                                            <input type="checkbox" id="chbLinkMantenimiento[]" name="chbLinkMantenimiento[]" value="Mantenimiento" onclick="marcarChb('chbLinkMantenimiento','chbDetalleLinkMantenimiento')"> MarcarTodos
                                        </label>
                                    </div>
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkMantenimiento[]" name="chbDetalleLinkMantenimiento[]" value="Trabajadores">Trabajadores
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkMantenimiento[]" name="chbDetalleLinkMantenimiento[]" value="TablaInfracciones">Tabla de Infracciones
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkMantenimiento[]" name="chbDetalleLinkMantenimiento[]" value="Vehiculos">Vehiculos
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkMantenimiento[]" name="chbDetalleLinkMantenimiento[]" value="Testigos">Testigos
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkMantenimiento[]" name="chbDetalleLinkMantenimiento[]" value="Propietarios">Propietarios
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkMantenimiento[]" name="chbDetalleLinkMantenimiento[]" value="EfectivoPNP">Efectivo PNP
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkMantenimiento[]" name="chbDetalleLinkMantenimiento[]" value="Conductores">Conductores
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkMantenimiento[]" name="chbDetalleLinkMantenimiento[]" value="Descuentos">Descuentos
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /. modulo Procesos -->
                           
                            <div class="col-xs-12 col-sm-6">
                                <div class="panel panel-default" >
                                    <div class="panel-heading">
                                        Reportes --->
                                        <label class="checkbox-inline">
                                            <input type="checkbox" id="chbLinkReportes[]" name="chbLinkReportes[]" value="Reportes" onclick="marcarChb('chbLinkReportes','chbDetalleLinkReportes')"> MarcarTodos
                                        </label>
                                    </div>
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkReportes[]" name="chbDetalleLinkReportes[]" value="PapeletasqueAdeudan">Papeletas que Adeudan
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkReportes[]" name="chbDetalleLinkReportes[]" value="TodoslosRecibos">Todos los Recibos
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkReportes[]" name="chbDetalleLinkReportes[]" value="RecibosPagados">Recibos Pagados
                                            
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkReportes[]" name="chbDetalleLinkReportes[]" value="Resumenes">Resumenes
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkReportes[]" name="chbDetalleLinkReportes[]" value="HistorialdeEventos">Historial de Eventos
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- /. modulo Turismo -->
                          </div>

                          <div class="row">
                            <!-- /. modulo Procesos -->
                            <div class="col-xs-12 col-sm-6">
                                <div class="panel panel-default" >
                                    <div class="panel-heading">
                                        Procesos --->
                                        <label class="checkbox-inline">
                                            <input type="checkbox" id="chbLinkProcesos[]" name="chbLinkProcesos[]"  value="Procesos" onclick="marcarChb('chbLinkProcesos','chbDetalleLinkProcesos')"> MarcarTodos
                                        </label>
                                    </div>
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="chbDetalleLinkProcesos[]" name="chbDetalleLinkProcesos[]" value="Papeletas">Papeletas
                                            </label><br>
                                            <label class="checkbox-inline">
                                                <input type="checkbox"  id="chbDetalleLinkProcesos[]" name="chbDetalleLinkProcesos[]"  value="Recibos">Recibos
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /. modulo Contabilidad -->
                            
                            
                            <!-- /. modulo Contabilidad -->
                            
                          </div>
                            
                          
                          
                        </div>
                    </div>
                    <div id="mensaje"></div>
               </div>      
                <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-times fa-fw"></i> Cerrar</button>
                <button type="submit" class="btn btn-primary" id="guardarUsuario"> <i class="fa fa-download fa-fw"></i> Guardar Cambios</button>
                </div>  
                
               
                    </form>                            
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<?php /*
                            $oTrabajador=new ctrabajador('','','','','','','','','');
                            
                           foreach ($oTrabajador->MostrarTrabajadores() as $fila) {
                               # code...
                                print_r( "<option value='".$fila['Cod_trabajador']."'>".$fila['Nombre_trabajador']."</option>");
                           }*/
                                
                            
                        ?>