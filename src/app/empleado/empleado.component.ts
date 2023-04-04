import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = 'Daniel';
  apellido = 'Patiño';
  //private edad = 23;
  edad = 23;
  empresa ='PJL';
  textoRegistro = 'No hay registros'

  /*getEdad(){
    return this.edad;
  }*/

  /*llamaEmpresa(value:String){
  }*/

  habilitacionCuadro = true;
  usuRegistrado = false;

  getRegistroUsuario() {
    this.usuRegistrado = false
  }

  setUsuarioRegistrado(event:Event) {
    //alert('Registrado');
    //this.textoRegistro = 'Se registro';
    console.log((<HTMLInputElement>event.target).value);
    if((<HTMLInputElement>event.target).value=='si'){
      this.textoRegistro = 'Se registro';
    }else{
      this.textoRegistro = 'No registro';
    }
  }

  ngOnInit(): void {

  }

}
