import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaestroSinExamenPage } from './maestro-sin-examen.page';

describe('MaestroSinExamenPage', () => {
  let component: MaestroSinExamenPage;
  let fixture: ComponentFixture<MaestroSinExamenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroSinExamenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaestroSinExamenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
