import { Component, OnInit } from '@angular/core';
import { PlacarService } from '../shared/services/classificacao.service';
import { Times } from '../shared/model/times.model';
import { Jogador } from '../shared/model/jogador.model';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.page.html',
  styleUrls: ['./classificacao.page.scss'],
})
export class ClassificacaoPage implements OnInit {

  constructor(private placarService: PlacarService) { }
  dataTimes: Times[];
  dataJogadores: Jogador[];
  refresher: boolean;
  lista: String = 'times';
  opcao: String = 'Times';
  color: String = 'primary';

  ngOnInit() {
    this.getTimes();
    this.getJogadores();
  }

  trocaLista() {
    this.lista = this.lista == 'times'? 'jogadores' : 'times';
    this.opcao = this.opcao == 'Times'? 'Individual' : 'Times';
    this.color = this.color == 'primary'? 'danger' : 'primary';
  }

  doRefresh($event){
    this.ngOnInit();
    setTimeout(() => {      
      $event.target.complete();
    }, 500);
  }

  getTimes() {
    this.placarService.getTimes().then((data: Times) => {    
      this.dataTimes = Object.values(data).sort();
      this.dataTimes.sort((j1, j2) => j1.pontuacao - j2.pontuacao).reverse();
    });
  }

  getJogadores() {  
    this.placarService.getJogadores().then((data: Jogador) => {      
      this.dataJogadores = Object.values(data).sort();
      this.dataJogadores.sort((j1, j2) => j1.pontuacao - j2.pontuacao).reverse();      
    });
  }
}
