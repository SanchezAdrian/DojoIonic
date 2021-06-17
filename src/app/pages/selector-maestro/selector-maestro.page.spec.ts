import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectorMaestroPage } from './selector-maestro.page';

describe('SelectorMaestroPage', () => {
  let component: SelectorMaestroPage;
  let fixture: ComponentFixture<SelectorMaestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorMaestroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorMaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
