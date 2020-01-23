import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacarPage } from './placar.page';

describe('PlacarPage', () => {
  let component: PlacarPage;
  let fixture: ComponentFixture<PlacarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
