import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaAngular';
  saludo = 'Saludo creado desde app.components.ts'; //interpolacion que se usa desde html con {{saludo}}
}
