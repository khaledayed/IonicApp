import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  authPage: any = AuthPage;
  @ViewChild('content') content: NavController;

    isAuth:boolean;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController ) {
    platform.ready().then(() => {
      let firebaseConfig = {
        apiKey: "AIzaSyAUo68KjIwmOnYfaj5xDV2PdFgY8kcXpS0",
        authDomain: "projet-ionic3.firebaseapp.com",
        databaseURL: "https://projet-ionic3.firebaseio.com",
        projectId: "projet-ionic3",
        storageBucket: "",
        messagingSenderId: "175209724374",
        appId: "1:175209724374:web:8cf17cad4cea1c09bc0c77"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
           this.isAuth = true;
           this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      )
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
}

  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

