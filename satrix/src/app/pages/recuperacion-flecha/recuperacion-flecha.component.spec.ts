import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionFlechaComponent } from './recuperacion-flecha.component';

describe('RecuperacionFlechaComponent', () => {
  let component: RecuperacionFlechaComponent;
  let fixture: ComponentFixture<RecuperacionFlechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacionFlechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacionFlechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
