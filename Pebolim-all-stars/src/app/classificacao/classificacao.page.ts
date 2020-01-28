import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacarService } from '../shared/services/classificacao.service';
import { Times } from '../shared/model/times.model';
import { Subscription } from 'rxjs';
import { Jogador } from '../shared/model/jogador.model';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.page.html',
  styleUrls: ['./classificacao.page.scss'],
})
export class ClassificacaoPage implements OnInit, OnDestroy {

  constructor(private placarService: PlacarService) { }
  dataTimes: Times[];
  dataJogadores: Jogador[];
  refresher: boolean;
  dataSubscription: Subscription;
  lista: String = 'times';
  opcao: String = 'Times';
  color: String = 'primary'

  ngOnInit() {
    this.getTimes();
    this.getJogadores();
    console.log(this.dataJogadores)
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
    this.dataSubscription = this.placarService.getTimes().subscribe((data: Times) => {
      this.dataTimes = Object.values(data).sort();
      this.dataTimes.sort((t1, t2) => t1.pontuacao - t2.pontuacao).reverse();
    });
  }

  getJogadores() {
    this.dataSubscription = this.placarService.getJogadores().subscribe((data: Jogador) => {
      console.log(data)
      this.dataJogadores = Object.values(data).sort();
      this.dataJogadores.sort((j1, j2) => j1.pontuacao - j2.pontuacao).reverse();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
