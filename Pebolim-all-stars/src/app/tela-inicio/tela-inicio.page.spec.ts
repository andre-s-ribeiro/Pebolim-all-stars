import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaInicioPage } from './tela-inicio.page';
import { Router } from '@angular/router';

describe('TelaInicioPage', () => {
  let component: TelaInicioPage;
  let fixture: ComponentFixture<TelaInicioPage>;
  const routerStub = {
    navigate: ({})    
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInicioPage ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Router, useValue: routerStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
