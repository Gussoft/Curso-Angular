import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {
    
  }

  public name:string = 'ironman'
  age:number = 45
  isChangeAge:boolean = true

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  get getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void {
    this.age = 25
    this.isChangeAge = !this.isChangeAge
  }

  reset():void {
    this.age = 45
    this.name = 'ironman'
  }
}
