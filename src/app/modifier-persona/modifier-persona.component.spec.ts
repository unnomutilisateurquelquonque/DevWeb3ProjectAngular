import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPersonaComponent } from './modifier-persona.component';

describe('ModifierPersonaComponent', () => {
  let component: ModifierPersonaComponent;
  let fixture: ComponentFixture<ModifierPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
