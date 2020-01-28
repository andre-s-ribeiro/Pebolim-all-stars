import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegrasPage } from './regras.page';

describe('RegrasPage', () => {
  let component: RegrasPage;
  let fixture: ComponentFixture<RegrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegrasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
