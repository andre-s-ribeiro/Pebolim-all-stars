import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-placar-modal-content',
  templateUrl: './placar-modal-content.component.html',
  styleUrls: ['./placar-modal-content.component.scss'],
})
export class PlacarModalContentComponent implements OnInit {
  firstOption: string = 'limite de tempo';
  secondOption: string = 'limite de pontos';
  pontosLimite: boolean = true;
  pontosLimiteRange: boolean = false;
  opcaoTempo: boolean = true;
  opcaoGols: boolean = true;
  tempoLimite: boolean = true;
  minutos: number;
  minutosLimiteRange: boolean = false;
  pontuacao: number;
  erro: boolean = false;
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private screenOrientation: ScreenOrientation
  ) { }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  sair() {
    this.router.navigate(['tela-inicio']);
    this.dismiss();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'minutos': this.minutos,
      'pontos': this.pontuacao,
      'infinity': false
    });
  }

  onChangePontos($event) {
    this.opcaoGols = !$event.target.checked;
    this.pontosLimiteRange = !$event.target.checked ? false : true;
  }
  onChangeMinutos($event) {
    this.opcaoTempo = !$event.target.checked;
    this.minutosLimiteRange = !$event.target.checked ? false : true;
  }

  getMinutos($event) {
    this.minutos = $event.detail.value;
  }

  getPontos($event) {
    this.pontuacao = $event.detail.value
  }

  salvar() {
    if (this.minutos && this.pontuacao && this.opcaoTempo && this.opcaoGols) {
      this.modalCtrl.dismiss({
        'minutos': this.minutos,
        'pontos': this.pontuacao,
        'infinity': false
      });
    } else if (this.pontuacao && this.opcaoGols) {
      this.modalCtrl.dismiss({
        'pontos': this.pontuacao,
        'infinity': true
      });
    } else if (this.minutos && this.opcaoTempo) {
      this.modalCtrl.dismiss({
        'minutos': this.minutos,
        'infinity': false
      });
    } else {
      this.modalCtrl.dismiss({
        'pontos': 99,
        'infinity': true
      });
    }



  }
}
