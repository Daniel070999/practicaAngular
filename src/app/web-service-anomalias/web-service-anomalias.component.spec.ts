import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServiceAnomaliasComponent } from './web-service-anomalias.component';

describe('WebServiceAnomaliasComponent', () => {
  let component: WebServiceAnomaliasComponent;
  let fixture: ComponentFixture<WebServiceAnomaliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebServiceAnomaliasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebServiceAnomaliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
