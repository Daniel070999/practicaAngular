import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../lista-empleados/lista-empleados.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService
  ) { }
  accion?: number;
  /*actualizaEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre!, this.cuadroApellido!, this.cuadroCargo!, this.cuadroSalario!);
    //this.miServicio.muestraMensaje('Empleado: ' + miEmpleado.$nombre);
    //this.empleados.push(miEmpleado);
    this.empleadosService.actualizarEmpleadoServicio(this.indice!, miEmpleado);
    this.router.navigate(['']);
  }
  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleadoServicio(this.indice!);
    this.router.navigate(['']);
  }*/
  actualizaEmpleado() {
    if (this.accion == 1) {
      let miEmpleado = new Empleado(this.cuadroNombre!, this.cuadroApellido!, this.cuadroCargo!, this.cuadroSalario!);
      this.empleadosService.actualizarEmpleadoServicio(this.indice!, miEmpleado);
    } else {
      this.empleadosService.eliminarEmpleadoServicio(this.indice!);
    }
    this.router.navigate(['']);
  }
  empleados: Empleado[] = [];
  ngOnInit(): void {
    this.accion = this.route.snapshot.queryParams['accion'];

    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice!);

    this.cuadroNombre = empleado.$nombre;
    this.cuadroApellido = empleado.$apellido;
    this.cuadroCargo = empleado.$cargo;
    this.cuadroSalario = empleado.$salario;
  }

  cuadroNombre?: string;
  cuadroApellido?: string;
  cuadroCargo?: string;
  cuadroSalario?: number;
  indice?: number;

  volverHome() {
    this.router.navigate(['']);
  }

}
