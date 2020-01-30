import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-placar-modal-content',
  templateUrl: './placar-modal-content.component.html',
  styleUrls: ['./placar-modal-content.component.scss'],
})
export class PlacarModalContentComponent implements OnInit {
  firstOption: boolean;
  secondOption: boolean;
  tempoLimite: boolean = false;
  pontosLimite: boolean = false;
  date: Date;
  pontuacao: number;
  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

  }

  sair() {
    this.router.navigate(['tela-inicio']);
    this.dismiss();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  onChange($event){
    if($event.detail.value[1]){
      this.tempoLimite = true;
      this.pontosLimite = true;
    }else if($event.detail.value[0] == this.firstOption){
      this.tempoLimite = true;
      this.pontosLimite = false;
    }else{
      this.tempoLimite = false;
      this.pontosLimite = true;
    }
  }

  getMinutos($event){
    this.date = new Date($event.detail.value);
  }

  getPontos($event){
    let date = new Date($event.detail.value);
    this.pontuacao = date.getMinutes();
  }

  salvar(){
    if(this.date && this.pontuacao){
      this.modalCtrl.dismiss({
        'minutos': this.date.getMinutes(),
        'pontos': this.pontuacao,
        'infinity': false
      });
    }else if(this.pontuacao){
      this.modalCtrl.dismiss({
        'pontos': this.pontuacao,
        'infinity': true
      });
    }else{
      this.modalCtrl.dismiss({
        'minutos': this.date.getMinutes(),
        'infinity': false
      });
    }
   
  }
}
