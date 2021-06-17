import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorAlumnoExamenPage } from './tutor-alumno-examen.page';

describe('TutorAlumnoExamenPage', () => {
  let component: TutorAlumnoExamenPage;
  let fixture: ComponentFixture<TutorAlumnoExamenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorAlumnoExamenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorAlumnoExamenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
