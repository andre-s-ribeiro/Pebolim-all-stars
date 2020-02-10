import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './components/grupo/grupo.component';

@NgModule({
  declarations: [
    GrupoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GrupoComponent
  ],
  providers: []
})
export class SharedModule { }
