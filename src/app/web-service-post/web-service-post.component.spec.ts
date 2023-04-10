import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServicePostComponent } from './web-service-post.component';

describe('WebServicePostComponent', () => {
  let component: WebServicePostComponent;
  let fixture: ComponentFixture<WebServicePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebServicePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebServicePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
