import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-placar-modal-content',
  templateUrl: './placar-modal-content.component.html',
  styleUrls: ['./placar-modal-content.component.scss'],
})
export class PlacarModalContentComponent implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {}

  sair(){
    this.router.navigate(['tela-inicio']);
    this.dismiss();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
