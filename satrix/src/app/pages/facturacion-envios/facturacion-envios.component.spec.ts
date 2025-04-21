import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionEnviosComponent } from './facturacion-envios.component';

describe('FacturacionEnviosComponent', () => {
  let component: FacturacionEnviosComponent;
  let fixture: ComponentFixture<FacturacionEnviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturacionEnviosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
