import { Empleado } from "./lista-empleados/lista-empleados.model";

export class EmpleadosService {
    empleados: Empleado[] = [
        new Empleado("Daniel", "Patiño", "Administrativo", 800),
        new Empleado("Alexander", "Vásquez", "Operativo", 900),
    ];
    agregarEmpleadoServicio(miEmpleado:Empleado) {
        this.empleados.push(miEmpleado);
    }
}