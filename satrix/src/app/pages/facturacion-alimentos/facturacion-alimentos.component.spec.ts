import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionAlimentosComponent } from './facturacion-alimentos.component';

describe('FacturacionAlimentosComponent', () => {
  let component: FacturacionAlimentosComponent;
  let fixture: ComponentFixture<FacturacionAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturacionAlimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
