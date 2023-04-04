import { Component } from '@angular/core';
import { Empleado } from './lista-empleados.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {
  titulo = 'Listado de Empleados';

  empleados: Empleado[] = [
    new Empleado("Daniel", "Patiño", "Administrativo", 800),
    new Empleado("Alexander", "Vásquez", "Operativo", 900),
  ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre!, this.cuadroApellido!, this.cuadroCargo!, this.cuadroSalario!);
    this.empleados.push(miEmpleado);
  }


  cuadroNombre?: string;
  cuadroApellido?: string;
  cuadroCargo?: string;
  cuadroSalario?: number;
}
