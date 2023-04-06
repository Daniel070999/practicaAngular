import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { ConsumirWebServiceComponentComponent } from './consumir-web-service-component/consumir-web-service-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent},
  {path:'consumir', component:ConsumirWebServiceComponentComponent},
  {path:'**', component:ErrorPersonalizadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    DirectivaComponent,
    ListaEmpleadosComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponent,
    ConsumirWebServiceComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
