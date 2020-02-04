import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    var firebaseConfig = {
      apiKey: "AIzaSyDfEHh1lKGxX1igo4oRlIhB1Vo-qvfMWjo",
      authDomain: "pebolim-all-stars.firebaseapp.com",
      databaseURL: "https://pebolim-all-stars.firebaseio.com",
      projectId: "pebolim-all-stars",
      storageBucket: "pebolim-all-stars.appspot.com",
      messagingSenderId: "369667857364",
      appId: "1:369667857364:web:7ed1463e81f7a3f79ad441",
      measurementId: "G-PBVD0C7LET"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


  }
}
