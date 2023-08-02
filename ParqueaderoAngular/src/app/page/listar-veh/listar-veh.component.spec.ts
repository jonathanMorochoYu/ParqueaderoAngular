import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVehComponent } from './listar-veh.component';

describe('ListarVehComponent', () => {
  let component: ListarVehComponent;
  let fixture: ComponentFixture<ListarVehComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVehComponent]
    });
    fixture = TestBed.createComponent(ListarVehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
