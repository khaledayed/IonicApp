export class Appareil{
   /*name: string;*/
   description: string[];
   isOn: boolean;
   startTime: string;
   endTime: string;

constructor(public name: string){
   /*this.name = name;*/
   this.isOn = false; 
   this.startTime = '';
   this.endTime ='';
   this.description = [];
}
}