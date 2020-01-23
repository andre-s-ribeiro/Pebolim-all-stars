import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassificacaoPageRoutingModule } from './classificacao-routing.module';

import { ClassificacaoPage } from './classificacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassificacaoPageRoutingModule
  ],
  declarations: [ClassificacaoPage]
})
export class ClassificacaoPageModule {}
