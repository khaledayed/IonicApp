import { Appareil} from '../models/Appareil';

export class AppareilsService{
    appareilsList: Appareil[] = [
        {
          name: 'Machine à laver',
          description: [
            'Volume: 6litres',
            'Temps de lavage: 2 heures',
            'Consommation: 173kwha/an'
          ],
          isOn: true,
          startTime: '',
          endTime: ''
        },
        {
          name: 'Télévision',
          description: [
            'Dimensions: 40 pouces',
            'Consommation: 22kwha/an'
          ],
          isOn: true,
          startTime: '',
          endTime: ''
        },
        {
          name: 'Ordinateur',
          description: [
            'Marque: fait maison',
            'Consommation: 500kwha/an'
          ],
          isOn: false,
          startTime: '',
          endTime: ''
        } 
        ]; 
        
  addAppareil(appareil: Appareil){
    this.appareilsList.push(appareil);
  }
}