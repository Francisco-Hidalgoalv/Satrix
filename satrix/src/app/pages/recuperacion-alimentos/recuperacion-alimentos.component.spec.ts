import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionAlimentosComponent } from './recuperacion-alimentos.component';

describe('RecuperacionAlimentosComponent', () => {
  let component: RecuperacionAlimentosComponent;
  let fixture: ComponentFixture<RecuperacionAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacionAlimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacionAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
