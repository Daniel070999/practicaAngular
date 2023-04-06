import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirWebServiceComponentComponent } from './consumir-web-service-component.component';

describe('ConsumirWebServiceComponentComponent', () => {
  let component: ConsumirWebServiceComponentComponent;
  let fixture: ComponentFixture<ConsumirWebServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumirWebServiceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumirWebServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
