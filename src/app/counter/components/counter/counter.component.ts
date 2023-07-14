import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
    counter = 10;

  increaseBy(value:number):void {
    this.counter += value;
    
  }

  resetBy() {
    this.counter = 10;
  }
  
    constructor() { }

    ngOnInit() { }
}