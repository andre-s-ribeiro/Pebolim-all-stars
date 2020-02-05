import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassificacaoPage } from './classificacao.page';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClassificacaoPage', () => {
  let component: ClassificacaoPage;
  let fixture: ComponentFixture<ClassificacaoPage>;
  const routerStub = {
    navigate: ({})    
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [Location, { provide: Router, useValue: routerStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
