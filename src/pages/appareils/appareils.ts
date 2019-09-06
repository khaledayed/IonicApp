import { Component } from '@angular/core';
import { ModalController, MenuController, NavController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';
import { AppareilFormPage } from '../appareil-form/appareil-form';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})

export class AppareilsPage {
  
appareilsList: Appareil[];

constructor(private modalCtrl: ModalController,
            private appareilsService: AppareilsService,
            private menuCtrl: MenuController,
            private navCntrl: NavController){

}
ionViewWillEnter(){
  this.appareilsList = this.appareilsService.appareilsList.slice();
}

onLoadAppareil(index: number){
    let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
    modal.present();
}
onToggleMenu(){
  this.menuCtrl.open();
  
}

onNewAppareil(){
  this.navCntrl.push(AppareilFormPage);
}
}