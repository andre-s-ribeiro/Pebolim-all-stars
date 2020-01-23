import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent
  },  {
    path: 'tela-inicial-teste',
    loadChildren: () => import('./tela-inicial-teste/tela-inicial-teste.module').then( m => m.TelaInicialTestePageModule)
  },
  {
    path: 'placar',
    loadChildren: () => import('./placar/placar.module').then( m => m.PlacarPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
