import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../lista-empleados/lista-empleados.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router: Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {

  }
  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre!, this.cuadroApellido!, this.cuadroCargo!, this.cuadroSalario!);
    //this.miServicio.muestraMensaje('Empleado: ' + miEmpleado.$nombre);
    //this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
  }
  empleados: Empleado[] = [];
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  cuadroNombre?: string;
  cuadroApellido?: string;
  cuadroCargo?: string;
  cuadroSalario?: number;

  volverHome() {
    this.router.navigate(['']);
  }

}
