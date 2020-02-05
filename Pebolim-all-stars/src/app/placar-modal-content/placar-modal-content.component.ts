import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

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
  tempoLimite: boolean = true;
  minutos: number;
  minutosLimiteRange: boolean = false;
  pontuacao: number;
  erro: boolean = false;
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

  onChangePontos($event){
    this.pontosLimiteRange = !$event.target.checked ? false : true; 
  }
  onChangeMinutos($event){
    this.minutosLimiteRange = !$event.target.checked ? false : true;
  }

  getMinutos($event){
    this.minutos = $event.detail.value;
  }

  getPontos($event){
    this.pontuacao = $event.detail.value
  }

  salvar(){
    if(this.minutos && this.pontuacao){
      this.modalCtrl.dismiss({
        'minutos': this.minutos,
        'pontos': this.pontuacao,
        'infinity': false
      });
    }else if(this.pontuacao){
      this.modalCtrl.dismiss({
        'pontos': this.pontuacao,
        'infinity': true
      });
    }else if(this.minutos){
      this.modalCtrl.dismiss({
        'minutos': this.minutos,
        'infinity': false
      });
    }else{
      this.modalCtrl.dismiss({
        'pontos': 99,
        'infinity': true
      });
    }

   
   
  }
}
