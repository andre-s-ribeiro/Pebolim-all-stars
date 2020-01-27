import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { PlacarModalContentComponent } from '../placar-modal-content/placar-modal-content.component';




@Component({
  selector: 'app-placar',
  templateUrl: './placar.page.html',
  styleUrls: ['./placar.page.scss'],
})
export class PlacarPage implements OnInit, OnDestroy {
  redPts: number = 0;
  bluePts: number = 0;
  isPlaying: boolean = false;
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
    this.isPlaying = true;
    this.countDownSubscription = interval(1000).pipe(
      map(() => this.countdownStart - 1000),
      filter(i => i >= 0)
    ).subscribe(x => {
      this.countdownStart = x
    })
  }
  pause() {
    this.isPlaying = false;
    this.countDownSubscription.unsubscribe();
  }
  refresh() {
    this.countdownStart = 3 * 60000;
    this.redPts = 0;
    this.bluePts = 0;
  }
  plusRedTeam() {
    this.redPts++;
    this.checkWhosWhinnig();
  }
  lessRedTeam() {
    this.redPts--;
    this.checkWhosWhinnig();
  }
  plusBlueTeam() {
    this.bluePts++;
    this.checkWhosWhinnig();
  }
  lessBlueTeam() {
    this.bluePts--;
    this.checkWhosWhinnig();
  }

  checkWhosWhinnig() {
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

  ngOnDestroy() {
    if (this.isPlaying) {
      this.countDownSubscription.unsubscribe();
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PlacarModalContentComponent
    });
    return await modal.present();
  }
}
