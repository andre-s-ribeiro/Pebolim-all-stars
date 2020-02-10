import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaveDeGruposPage } from './chave-de-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: ChaveDeGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaveDeGruposPageRoutingModule {}
