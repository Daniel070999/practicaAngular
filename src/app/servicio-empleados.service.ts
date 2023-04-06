import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {
  //Configuracion para el consumo de web service
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  

  //practica
  muestraMensaje(mensaje: string) {
    alert(mensaje);
  }

}
