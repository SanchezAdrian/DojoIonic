import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectorClasePage } from './selector-clase.page';

describe('SelectorClasePage', () => {
  let component: SelectorClasePage;
  let fixture: ComponentFixture<SelectorClasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorClasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
