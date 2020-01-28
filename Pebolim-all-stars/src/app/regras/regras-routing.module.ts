import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegrasPage } from './regras.page';

const routes: Routes = [
  {
    path: '',
    component: RegrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegrasPageRoutingModule {}
