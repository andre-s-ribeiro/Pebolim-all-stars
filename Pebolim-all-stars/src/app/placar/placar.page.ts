import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map , filter} from 'rxjs/operators';
import { ModalController } from '@ionic/angular';




@Component({
  selector: 'app-placar',
  templateUrl: './placar.page.html',
  styleUrls: ['./placar.page.scss'],
})
export class PlacarPage implements OnInit , OnDestroy {
  redPts: number = 0;
  bluePts: number = 0;
  isPaused: boolean = false;
  whoIsWinning: string = '';
  countDownSubscription: Subscription;
  countdownStart: number = 3000;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.countdownStart = 3 * 60000;

   
  
    
  }
  play() {
    this.isPaused = true;
    this.countDownSubscription = interval(1000).pipe(
      map(i =>  this.countdownStart  - 1000),
      filter(i => i >= 0 )
    ).subscribe(x => {
      this.countdownStart = x
    })
  }
  pause() {
    this.isPaused = false;
    this.countDownSubscription.unsubscribe();
  }
  plusRedTeam() {
    this.redPts++;
    this.win();
  }
  lessRedTeam() {
    this.redPts--;
    this.win();
  }
  plusBlueTeam() {
    this.bluePts++;
    this.win();
  }
  lessBlueTeam() {
    this.bluePts--;
    this.win();
  }

  win() {
    if (this.bluePts > this.redPts) {
      this.whoIsWinning = 'blue';
    }
    if (this.bluePts < this.redPts) {
      this.whoIsWinning = 'red'
    }
    if (this.bluePts === this.redPts) {
      this.whoIsWinning = 'draw'
    }
  }

  ngOnDestroy(){
    this.countDownSubscription.unsubscribe();
  }
}
