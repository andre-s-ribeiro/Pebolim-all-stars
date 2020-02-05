import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { RegrasPage } from './regras.page';

describe('RegrasPage', () => {
  let component: RegrasPage;
  let fixture: ComponentFixture<RegrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegrasPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule],
      providers: [Location]
    }).compileComponents();

    fixture = TestBed.createComponent(RegrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
