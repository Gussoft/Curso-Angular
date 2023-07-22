import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[] = [{
    id: '',
    name:'Trunks',
    power:10
  }]

  onDeleteCharacter(index:string):void {
    console.log(index);
    ///var x = this.characterList.find(x => x.name);
    this.onDeleteId.emit(index);
  }

}
