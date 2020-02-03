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
  infinity: boolean = false;
  redWon: boolean = false;
  blueWon: boolean = false;
  draw: boolean = false;
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
      this.countdownStart = x;
      if(x === 0){
        if(this.redPts > this.bluePts){
          this.redWon = true;
          this.isPlaying = false;
        }else if(this.bluePts > this.redPts){
          this.blueWon = true;
          this.isPlaying = false;
        }else{
          this.draw = true;
        }
      }
    });
   
  }
  pause() {
    this.isPlaying = false;
    this.countDownSubscription.unsubscribe();
  }
  refresh() {
    this.checarLimitacoes();
    this.isPlaying = false;
    this.countDownSubscription.unsubscribe();
    this.redPts = 0;
    this.bluePts = 0;
    this.draw = false;
    this.redWon = false;
    this.blueWon = false;
  }
  plusRedTeam() {
    this.redPts++;
    this.checkWhosWhinnig();
    this.checarQuemGanhou();
  }
  lessRedTeam() {
    this.redPts--;
    this.checkWhosWhinnig();
  }
  plusBlueTeam() {
    this.bluePts++;
    this.checkWhosWhinnig();
    this.checarQuemGanhou();
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
        this.tempoLimite = data.data['minutos'];
        this.pontosLimite = data.data['pontos'];  
        this.infinity = data.data['infinity'];  
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
  }

  checarQuemGanhou(){
    if(this.redPts >= this.pontosLimite && this.isPlaying && this.pontosLimite){
      this.redWon = true;
      this.isPlaying = false;
      this.countDownSubscription.unsubscribe();
    }else if(this.bluePts >= this.pontosLimite && this.isPlaying && this.pontosLimite ){
      this.blueWon = true;
      this.isPlaying = false;
      this.countDownSubscription.unsubscribe();
    }
  }
}
