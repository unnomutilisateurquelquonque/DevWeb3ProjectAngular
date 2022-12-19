import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPersonaComponent } from './ajouter-persona.component';

describe('AjouterPersonaComponent', () => {
  let component: AjouterPersonaComponent;
  let fixture: ComponentFixture<AjouterPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
