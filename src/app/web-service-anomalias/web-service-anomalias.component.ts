import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-web-service-anomalias',
  templateUrl: './web-service-anomalias.component.html',
  styleUrls: ['./web-service-anomalias.component.css']
})
export class WebServiceAnomaliasComponent implements OnInit {

  constructor(private userLoguinService: ServicioEmpleadosService) { }

  logueosList: any = [];

  ngOnInit(): void {
    this.userLoguinService.getLogueos().subscribe(
      response => {
        this.logueosList = response;
      }, error => {
        if (error.status == 0) {
          alert('No hay respuesta del servidor');
        }
      }
    );
  }
}
