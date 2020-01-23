import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaInicioPage } from './tela-inicio.page';

describe('TelaInicioPage', () => {
  let component: TelaInicioPage;
  let fixture: ComponentFixture<TelaInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
