import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.page.html',
  styleUrls: ['./tela-inicio.page.scss'],
})
export class TelaInicioPage implements OnInit {

  constructor(private router: Router, private screenOrientation: ScreenOrientation) { }
  

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  goToPlacar(){
    this.router.navigate(['placar'])
  }

  goToClassificacao(){
    this.router.navigate(['classificacao'])
  }

  goToRegras(){
    this.router.navigate(['regras'])
  }

  goToVideos(){
    this.router.navigate(['videos'])
  }
  goToChaveGrupos(){
    this.router.navigate(['chave-de-grupos'])
  }
  
}
