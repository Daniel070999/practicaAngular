import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-fake-store',
  templateUrl: './fake-store.component.html',
  styleUrls: ['./fake-store.component.css']
})
export class FakeStoreComponent implements OnInit {

  products: any = [];
  constructor(private storeService: ServicioEmpleadosService) { }
  ngOnInit(): void {
    this.storeService.getProducts().subscribe(
      response => {
        console.log(response);
        this.products = response;
      }
    );
  }

}