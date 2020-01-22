import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaInicialTestePage } from './tela-inicial-teste.page';

describe('TelaInicialTestePage', () => {
  let component: TelaInicialTestePage;
  let fixture: ComponentFixture<TelaInicialTestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInicialTestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaInicialTestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
