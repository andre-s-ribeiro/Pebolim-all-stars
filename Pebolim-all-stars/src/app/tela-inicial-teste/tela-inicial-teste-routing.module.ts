import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaInicialTestePage } from './tela-inicial-teste.page';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialTestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaInicialTestePageRoutingModule {}
