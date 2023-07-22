import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters:Character[] = [
    {
        id:uuid(),
        name:'Pikoro',
        power:1300
    },
    {
        id:uuid(),
        name:'Goku',
        power:15000
    },
    {
        id:uuid(),
        name:'Vegeta',
        power:16000
    }
]

onNewCharacter(char: Character):void {
      const newChar: Character = {
        ...char, id: uuid()
      }
    this.characters.push(newChar);
    
}

onDeleteCharacterById(id: string):void {
    this.characters = this.characters.filter(char => char.id !== id)
}

onDeleteCharacter2(char: number):void {
    this.characters.splice(char, 1)
}

}
