<?php
session_start();
if(!class_exists('clink'))
{
	include("../clases/clink.php");
}
$page=$_GET['page'];
$pagesecond=$_GET['pagesecond'];
$codigo="'".$_SESSION["Cod_trabajador"]."'";

$oLink=new clink('','',$codigo,'','1');							
?>


                    <ul class="sidebar-menu" id="side-menu" data-widget="tree">
                        <?php
                        if($page=="Principal")
                        	echo '<li class="active">';
                        else
                    		echo '<li>';
                    	
                    	echo'<a href="/pages/Principal.php"><i class="fa fa-dashboard fa-fw"></i> Escritorio</a>
                        </li>';
                        
                        
                        if($page=="Mantenimiento")
                        	echo '<li class="active">';
                    	else
                    		echo '<li class="treeview">';
                        
                    	   echo' <a href="#"><i class="fa fa-link" fa-fw"></i><span> Mantenimiento<span class="fa arrow"></span><span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                              </span>
                           </a>
                            <ul class="treeview-menu">';
                                
								
								foreach ($oLink->MostrarLinks('Mantenimiento')as $fila){
    								if($pagesecond==$fila['idLink'])
    		                          echo '<li class="active">';
    		                    	else
    		                    	 echo '<li>';
                                    if($fila['estado']==1)
                                        print_r('<a href="/pages/'.$fila['link'].'.php?page=Mantenimiento&pagesecond='.$fila['idLink'].'"><i class="'.$fila['icono'].'"></i> '.$fila['link'].'</a>');
                                    // else
    								    // echo '<a href="Principal.php?page=Principal&pagesecond=ninguno"><i class="$fila->icono"></i> '.$fila->link.'</a>';
                                    echo '</li>';
                                }    
                                
                            echo'</ul>
                        </li>';

                        if($page=="Procesos")
                        	echo '<li class="active">';
                    	else
                    		echo '<li class="treeview">';
                        
                           echo' <a href="#"><i class="fa fa-link" fa-fw"></i><span> Procesos<span class="fa arrow"></span><span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                              </span>
                           </a>
                            <ul class="treeview-menu">';
                                
								foreach ($oLink->MostrarLinks('Procesos')as $fila) {
    								if($pagesecond==$fila['idLink'] )
    		                          echo '<li>';
    		                    	else
    		                    	 echo '<li>';
                                    if($fila['estado']==1)
                                        print_r('<a href="/pages/'.$fila['link'].'.php?page=Procesos&pagesecond='.$fila['idLink'].'"><i class="'.$fila['icono'].'"></i> '.$fila['link'].'</a>');
                                    // else
                                    //     echo '<a href="Principal.php?page=Principal&pagesecond=ninguno"><i class="$fila->icono"></i> '.$fila->link.'</a>';
                                    echo '</li>';
                                }
                                
                            echo"</ul>
                        </li>";

                        if($page=="Reportes")
                            echo '<li class="active">';
                        else
                            echo '<li class="treeview">';
                        
                           echo' <a href="#"><i class="fa fa-link" fa-fw"></i><span> Reportes<span class="fa arrow"></span><span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                              </span>
                           </a>
                            <ul class="treeview-menu">';
                                
                                foreach ( $oLink->MostrarLinks('Reportes') as $fila) {
                                    if($pagesecond==$fila['idLink'] )
                                      echo '<li>';
                                    else
                                     echo '<li>';
                                    if($fila['estado']==1)
                                        print_r('<a href="/pages/'.$fila['link'].'.php?page=Reportes&pagesecond='.$fila['idLink'].'"><i class="'.$fila['icono'].'"></i> '.$fila['link'].'</a>');
                                    // else
                                    //     echo '<a href="Principal.php?page=Principal&pagesecond=ninguno"><i class="$fila->icono"></i> '.$fila->link.'</a>';
                                    echo '</li>';
                                }
                                
                            echo"</ul>
                        </li>";

                       
                        
                        
                   echo" </ul>";