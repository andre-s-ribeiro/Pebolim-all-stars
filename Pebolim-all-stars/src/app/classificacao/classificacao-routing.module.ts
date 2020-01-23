import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassificacaoPage } from './classificacao.page';

const routes: Routes = [
  {
    path: '',
    component: ClassificacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassificacaoPageRoutingModule {}
