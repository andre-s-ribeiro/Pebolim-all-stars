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
  tempoLimite: boolean = false;
  pontosLimite: boolean = false;
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
}
