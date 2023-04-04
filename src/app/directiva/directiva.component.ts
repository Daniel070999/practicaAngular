import { Component } from "@angular/core";


@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  titulo = 'Registro de usuarios';
  mensaje = '';
  registrado = false;
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  entradas: any;

  constructor() {
    this.entradas = [
      { titulo: "titulo 1" },
      { titulo: "titulo 2" },
      { titulo: "titulo 3" },
      { titulo: "titulo 4" }
    ]
  }

  registrarUsuario() {

    this.registrado = true;
    this.mensaje = 'Usuario registrado con éxito';

  }
  ngOnInit(): void {

  }


}
