import { Component, OnInit } from '@angular/core';
import { PlacarService } from '../shared/services/classificacao.service';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.page.html',
  styleUrls: ['./classificacao.page.scss'],
})
export class ClassificacaoPage implements OnInit {

  constructor(private placarService: PlacarService) { }
  dataTimes: any;
  dataJogadores: any;

  ngOnInit() {
    this.getTimes();
    this.getJogadores();
  }

  doRefresh($event){
    console.log(this.dataTimes);
  }

  getTimes() {
    return this.placarService.getTimes().subscribe(data => this.dataTimes = data);
  }

  getJogadores() {
    return this.placarService.getJogadores().subscribe(data => this.dataJogadores = data);
  }
}
