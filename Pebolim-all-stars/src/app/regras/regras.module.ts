import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegrasPageRoutingModule } from './regras-routing.module';

import { RegrasPage } from './regras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegrasPageRoutingModule
  ],
  declarations: [RegrasPage]
})
export class RegrasPageModule {}
