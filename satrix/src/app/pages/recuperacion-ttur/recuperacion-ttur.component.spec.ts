import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionTTURComponent } from './recuperacion-ttur.component';

describe('RecuperacionTTURComponent', () => {
  let component: RecuperacionTTURComponent;
  let fixture: ComponentFixture<RecuperacionTTURComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacionTTURComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacionTTURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
