import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-head',
  standalone: true,
  imports: [NgClass],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

  isActive = true
  id:number = 1


  setDateType(id:string) {
    const input = document.getElementById(id) as HTMLInputElement;
    input.type = 'date';
  }
  resetDateType(id:string) {
    const input = document.getElementById(id) as HTMLInputElement;
    if (!input.value) {
      input.type = 'text';
    }
  }



  addActive(id:number){
    this.id = id
  }
}
