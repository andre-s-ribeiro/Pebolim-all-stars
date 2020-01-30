import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
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
  tempoLimite: number;
  pontosLimite: number;

  constructor(
    public modalController: ModalController
  ) { }
  
  ngOnInit() {
    this.checarLimitacoes();
    this.redPts = 0;
    this.bluePts = 0;
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
    this.checarLimitacoes();
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
    modal.onDidDismiss()
      .then((data) => {
        this.tempoLimite = data.data['minutos']; // Here's your selected user!
        this.pontosLimite = data.data['pontos'];    
        if (this.tempoLimite || this.pontosLimite) {
          this.ngOnInit();
        }
      });

    return await modal.present();

  }

  checarLimitacoes() {
    if (this.tempoLimite) {
      this.countdownStart = this.tempoLimite * 60000;
    } else {
      this.countdownStart = 3 * 60000;
    }
    if (!this.pontosLimite) {
      this.pontosLimite = 99;
    } 
  }
}
