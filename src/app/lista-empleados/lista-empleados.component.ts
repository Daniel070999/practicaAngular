import { Component, OnInit } from '@angular/core';
import { Empleado } from './lista-empleados.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {
    //this.empleados = this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    https://youtu.be/BUjUTfsZ6lo?list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&t=3
  }
  empleados: Empleado[] = [];
  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre!, this.cuadroApellido!, this.cuadroCargo!, this.cuadroSalario!);
    this.miServicio.muestraMensaje('Empleado: ' + miEmpleado.$nombre);
    //this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }


  cuadroNombre?: string;
  cuadroApellido?: string;
  cuadroCargo?: string;
  cuadroSalario?: number;
}
