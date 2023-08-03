import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarfacturaComponent } from './listarfactura.component';

describe('ListarfacturaComponent', () => {
  let component: ListarfacturaComponent;
  let fixture: ComponentFixture<ListarfacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarfacturaComponent]
    });
    fixture = TestBed.createComponent(ListarfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
