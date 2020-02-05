import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacarModalContentComponent } from './placar-modal-content.component';
import { Router } from '@angular/router';

describe('PlacarModalContentComponent', () => {
  let component: PlacarModalContentComponent;
  let fixture: ComponentFixture<PlacarModalContentComponent>;
  const routerStub = {
    navigate: ({})    
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacarModalContentComponent ],
      imports: [IonicModule.forRoot()],
      providers: [{provide: Router, useValue: routerStub}]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacarModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
