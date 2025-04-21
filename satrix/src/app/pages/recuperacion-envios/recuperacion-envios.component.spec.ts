import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionEnviosComponent } from './recuperacion-envios.component';

describe('RecuperacionEnviosComponent', () => {
  let component: RecuperacionEnviosComponent;
  let fixture: ComponentFixture<RecuperacionEnviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacionEnviosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacionEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
