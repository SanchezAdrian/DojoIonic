import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaestroExamenesActivosPage } from './maestro-examenes-activos.page';

describe('MaestroExamenesActivosPage', () => {
  let component: MaestroExamenesActivosPage;
  let fixture: ComponentFixture<MaestroExamenesActivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroExamenesActivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaestroExamenesActivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
