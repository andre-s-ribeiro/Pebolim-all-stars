import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss'],
})
export class TelaInicialComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  goToPlacar(){
    this.router.navigate(['placar'])
  }
}
