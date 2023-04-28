import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-web-service-post',
  templateUrl: './web-service-post.component.html',
  styleUrls: ['./web-service-post.component.css']
})
export class WebServicePostComponent implements OnInit {
  constructor(private postJavaService: ServicioEmpleadosService) { }

  user: any = [];
  responsePost: any = [];
  tituloForm = '';
  cuerpoForm = '';
  claveIdForm = '';
  enviado = false;
  ngOnInit(): void { }
  limpiarRegistro() {
    this.tituloForm = '';
    this.cuerpoForm = '';
    this.claveIdForm = '';
    this.enviado = false;
  }
  postMetod() {
    if (this.tituloForm == '' || this.cuerpoForm == '' || this.claveIdForm == '') {
      alert('Llene el formulario')
    } else {
      this.postJavaService.postJava({
        title: this.tituloForm,
        body: this.cuerpoForm,
        userId: this.claveIdForm
      }).subscribe(response => {
        this.responsePost = response;
        this.enviado = true;
        this.consultarResultado(this.responsePost.title);
      });

    }
  }
  consultarResultado(title: String) {
    if (title == 'anomalia') {
      alert('notificar');
    }
  }
}


