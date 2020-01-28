import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { PlacarModalContentComponent } from './placar-modal-content/placar-modal-content.component';
>>>>>>> a0fb2e442630b7b94b522302040b633de29ab7dc

@NgModule({
  declarations: [
    AppComponent,
    PlacarModalContentComponent
  ],
  entryComponents: [PlacarModalContentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
