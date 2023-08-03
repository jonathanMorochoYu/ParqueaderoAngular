import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTicketComponent } from './listar-ticket.component';

describe('ListarTicketComponent', () => {
  let component: ListarTicketComponent;
  let fixture: ComponentFixture<ListarTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTicketComponent]
    });
    fixture = TestBed.createComponent(ListarTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
