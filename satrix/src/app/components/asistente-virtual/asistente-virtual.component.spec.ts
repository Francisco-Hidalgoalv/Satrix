import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteVirtualComponent } from './asistente-virtual.component';

describe('AsistenteVirtualComponent', () => {
  let component: AsistenteVirtualComponent;
  let fixture: ComponentFixture<AsistenteVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsistenteVirtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsistenteVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
