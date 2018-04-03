import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngkorComponent } from '../components/Angkor/Angkor';
import { AboutPage } from '../pages/about/about';
import { TapromPage } from '../components/Taprom/Taprom';
import { MondulkiriComponent } from '../components/mondulkiri/mondulkiri';
import { BusraComponent } from '../components/busra/busra';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AngkorComponent,
    AboutPage,
    TapromPage,
    MondulkiriComponent,
    BusraComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    TapromPage,
    AngkorComponent,
    MondulkiriComponent,
    BusraComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
