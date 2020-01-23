import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.page.html',
  styleUrls: ['./classificacao.page.scss'],
})
export class ClassificacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh($event){
    console.log($event);
  }
}
