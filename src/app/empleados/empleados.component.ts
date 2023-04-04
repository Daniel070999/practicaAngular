import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'] //para obtener todos los estilos del componente css
  //styles: ['p{background-color:red;}']       //para usar solo algun estilo en específico (inline) 
})
export class EmpleadosComponent implements OnInit{
  ngOnInit(): void {
    
  }

}
