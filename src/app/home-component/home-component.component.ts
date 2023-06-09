import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../lista-empleados/lista-empleados.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {
    //this.empleados = this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  empleados: Empleado[] = [];
  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre!, this.cuadroApellido!, this.cuadroCargo!, this.cuadroSalario!);
    //this.miServicio.muestraMensaje('Empleado: ' + miEmpleado.$nombre);
    //this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }


  cuadroNombre?: string;
  cuadroApellido?: string;
  cuadroCargo?: string;
  cuadroSalario?: number;
}
