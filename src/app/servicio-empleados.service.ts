import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {
  // fake store api https://fakestoreapi.com/docs 
  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  //Configuracion para el consumo de web service de la practica de Java
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  /** Configuracion para el consumo de web service de anomalias creado desde Spring Boot
  *
  *Para solucionar el problemas de bloqueo de CORS se recomiendo instalar la extension
  *de google Chrome (Allow CORS: Access-Control-Allow-Origin - https://webbrowsertools.com/test-cors/)
  */
  getLogueos() {
    return this.http.get('http://localhost:8082/deteccionanomalias/v1/logueo');
  }

  /**
   * 
   * Metodo post obtenido desde https://jsonplaceholder.typicode.com/guide/
   * @param data Son los parámtros que se deben enviar en el método tipo post
   * @returns Web service para el consumo del post
   */
  postJava(data: Object) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
  //practica
  muestraMensaje(mensaje: string) {
    alert(mensaje);
  }

}
