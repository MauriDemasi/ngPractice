import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTablaComponent } from './componente-tabla.component';

describe('ComponenteTablaComponent', () => {
  let component: ComponenteTablaComponent;
  let fixture: ComponentFixture<ComponenteTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteTablaComponent]
    });
    fixture = TestBed.createComponent(ComponenteTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
