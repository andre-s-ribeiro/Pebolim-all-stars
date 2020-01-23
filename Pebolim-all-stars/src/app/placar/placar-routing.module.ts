import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacarPage } from './placar.page';

const routes: Routes = [
  {
    path: '',
    component: PlacarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacarPageRoutingModule {}
