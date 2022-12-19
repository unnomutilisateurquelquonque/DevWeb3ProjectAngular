import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPersonaComponent } from './supprimer-persona.component';

describe('SupprimerPersonaComponent', () => {
  let component: SupprimerPersonaComponent;
  let fixture: ComponentFixture<SupprimerPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
