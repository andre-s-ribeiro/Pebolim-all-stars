import { Component, OnInit } from '@angular/core';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.page.html',
  styleUrls: ['./regras.page.scss'],
})
export class RegrasPage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation) { }  

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }  
  
}
