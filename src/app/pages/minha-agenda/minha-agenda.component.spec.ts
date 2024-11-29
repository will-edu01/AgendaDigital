import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaAgendaComponent } from './minha-agenda.component';

describe('MinhaAgendaComponent', () => {
  let component: MinhaAgendaComponent;
  let fixture: ComponentFixture<MinhaAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaAgendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
