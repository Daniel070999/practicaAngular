import { Injectable } from "@angular/core";
import { Empleado } from "./lista-empleados/lista-empleados.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService {



    constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {

    }

    empleados: Empleado[] = [
        new Empleado("Daniel", "Patiño", "Administrativo", 800),
        new Empleado("Alexander", "Vásquez", "Operativo", 900),
    ];
    agregarEmpleadoServicio(miEmpleado: Empleado) {
        this.servicioVentanaEmergente.muestraMensaje('Persona:\n' + miEmpleado.$nombre + '\n Salario:\n' + miEmpleado.$salario);
        this.empleados.push(miEmpleado);
    }
    actualizarEmpleadoServicio(indice: number, miEmpleado: Empleado) {
        let empleadoModificado = this.empleados[indice];

        empleadoModificado.$nombre = miEmpleado.$nombre;
        empleadoModificado.$apellido = miEmpleado.$apellido;
        empleadoModificado.$cargo = miEmpleado.$cargo;
        empleadoModificado.$salario = miEmpleado.$salario;
    }
    eliminarEmpleadoServicio(indice: number) {
        this.empleados.splice(indice, 1);

    }
    encontrarEmpleado(indice: number) {
        let empleado: Empleado = this.empleados[indice];
        return empleado;
    }
}