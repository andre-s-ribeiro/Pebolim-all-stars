import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.page.html',
  styleUrls: ['./tela-inicio.page.scss'],
})
export class TelaInicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
  
}
