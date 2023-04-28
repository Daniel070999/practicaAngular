import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-consumir-web-service-component',
  templateUrl: './consumir-web-service-component.component.html',
  styleUrls: ['./consumir-web-service-component.component.css']
})
export class ConsumirWebServiceComponentComponent implements OnInit {

  constructor(private usersService: ServicioEmpleadosService) {

  }
  valorBuscar = '';
  userList: any = [];
  buscar() {
    console.log(this.valorBuscar);
    this.usersService.getUsers().subscribe(
      response => {
        this.userList = response;
        if (this.userList.name == this.valorBuscar) {
          this.userList = response;
        }
      }
    );
  }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      response => console.log(response)
    );
    this.usersService.getUsers().subscribe(
      response => this.userList = response
    );

  }

}
