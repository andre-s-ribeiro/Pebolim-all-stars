import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { VideosPage } from './videos.page';
import { VideosService } from '../shared/services/videos.service';
import * as firebase from 'firebase'

describe('VideosPage', () => {
  let component: VideosPage;
  let fixture: ComponentFixture<VideosPage>;
  const db = firebase.firestore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule],
      providers: [Location, VideosService ]
    }).compileComponents();

    fixture = TestBed.createComponent(VideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(db).toBeTruthy();
  });
});
