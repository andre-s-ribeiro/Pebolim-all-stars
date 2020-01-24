import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacarPageRoutingModule } from './placar-routing.module';

import { PlacarPage } from './placar.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacarPageRoutingModule,
    SharedModule
  ],
  declarations: [PlacarPage]
})
export class PlacarPageModule {}
