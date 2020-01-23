import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaInicioPageRoutingModule } from './tela-inicio-routing.module';

import { TelaInicioPage } from './tela-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaInicioPageRoutingModule
  ],
  declarations: [TelaInicioPage]
})
export class TelaInicioPageModule {}
