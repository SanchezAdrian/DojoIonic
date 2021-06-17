import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorAlumnoCategoriaPage } from './tutor-alumno-categoria.page';

describe('TutorAlumnoCategoriaPage', () => {
  let component: TutorAlumnoCategoriaPage;
  let fixture: ComponentFixture<TutorAlumnoCategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorAlumnoCategoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorAlumnoCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
