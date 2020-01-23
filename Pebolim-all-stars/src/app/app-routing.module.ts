import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tela-inicio/tela-inicio.module').then( m => m.TelaInicioPageModule)
  },
  {
    path: 'tela-inicio',
    loadChildren: () => import('./tela-inicio/tela-inicio.module').then( m => m.TelaInicioPageModule)
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
