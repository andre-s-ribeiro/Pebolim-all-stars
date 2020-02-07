import { Component, OnInit } from '@angular/core';
import { ChaveGruposService } from '../shared/services/chave-grupos.service';
import { Grupos } from '../shared/model/grupos.model';


@Component({
  selector: 'app-chave-de-grupos',
  templateUrl: './chave-de-grupos.page.html',
  styleUrls: ['./chave-de-grupos.page.scss'],
  providers: [
    ChaveGruposService
  ]
})
export class ChaveDeGruposPage implements OnInit {
  grupos: Grupos[] = [];

  constructor(private chaveGrupoService: ChaveGruposService) { }

  ngOnInit() {
    this.getGrupos();
  }


  getGrupos() {
  //  this.chaveGrupoService.getGrupos().then((data: Grupos[])=>{
  //     this.grupos = data
  //     console.log(data[0])
  //  })
  }
}
