import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-caracter',
  templateUrl: './caracter.component.html',
  styleUrls: ['./caracter.component.css']
})
export class CaracterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id:'',
    name: '',
    power: 0
  };

  emitCharacter():void {
    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    
    this.character = {id:'', name: '', power: 0};
   
  }
}
