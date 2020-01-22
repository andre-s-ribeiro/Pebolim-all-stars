import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaInicialTestePageRoutingModule } from './tela-inicial-teste-routing.module';

import { TelaInicialTestePage } from './tela-inicial-teste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaInicialTestePageRoutingModule
  ],
  declarations: [TelaInicialTestePage]
})
export class TelaInicialTestePageModule {}
