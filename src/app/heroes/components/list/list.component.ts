import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroNames:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Dr. Strange']

  deleteHero?:string;

  deleteLastHero():void {
    this.deleteHero  = this.heroNames.pop();
    
    
  }


}
