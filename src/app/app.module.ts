import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {AppareilsPage} from '../pages/appareils/appareils';
import { SingleAppareilPage } from '../pages/appareils/single-appareil/single-appareil';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { AppareilsService } from '../services/appareils.service';
import { OptionsPage } from '../pages/options/options';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    OptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    OptionsPage
  ],
  providers: [
    AppareilsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
