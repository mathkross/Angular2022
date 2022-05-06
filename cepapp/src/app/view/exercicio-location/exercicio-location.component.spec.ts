import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioLocationComponent } from './exercicio-location.component';

describe('ExercicioLocationComponent', () => {
  let component: ExercicioLocationComponent;
  let fixture: ComponentFixture<ExercicioLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
