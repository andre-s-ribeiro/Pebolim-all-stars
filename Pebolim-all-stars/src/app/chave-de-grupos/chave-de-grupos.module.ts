import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaveDeGruposPageRoutingModule } from './chave-de-grupos-routing.module';

import { ChaveDeGruposPage } from './chave-de-grupos.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaveDeGruposPageRoutingModule,
    SharedModule
  ],
  declarations: [ChaveDeGruposPage]
})
export class ChaveDeGruposPageModule {}
