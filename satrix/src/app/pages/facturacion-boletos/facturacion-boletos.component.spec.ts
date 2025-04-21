import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionBoletosComponent } from './facturacion-boletos.component';

describe('FacturacionBoletosComponent', () => {
  let component: FacturacionBoletosComponent;
  let fixture: ComponentFixture<FacturacionBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturacionBoletosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
