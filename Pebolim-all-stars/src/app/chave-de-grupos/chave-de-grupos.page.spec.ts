import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChaveDeGruposPage } from './chave-de-grupos.page';

describe('ChaveDeGruposPage', () => {
  let component: ChaveDeGruposPage;
  let fixture: ComponentFixture<ChaveDeGruposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaveDeGruposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChaveDeGruposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
