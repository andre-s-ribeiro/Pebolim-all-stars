import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacarPageRoutingModule } from './placar-routing.module';

import { PlacarPage } from './placar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacarPageRoutingModule
  ],
  declarations: [PlacarPage]
})
export class PlacarPageModule {}
