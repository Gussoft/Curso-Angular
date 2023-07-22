import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { CaracterComponent } from './components/caracter/caracter.component';
import { FormsModule, NgModel } from '@angular/forms';


@NgModule({
  exports:[
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    CaracterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
