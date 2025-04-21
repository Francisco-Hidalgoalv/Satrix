import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionBoletosComponent } from './recuperacion-boletos.component';

describe('RecuperacionBoletosComponent', () => {
  let component: RecuperacionBoletosComponent;
  let fixture: ComponentFixture<RecuperacionBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacionBoletosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacionBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
