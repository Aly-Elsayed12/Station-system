import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AsideComponent } from "../../components/aside/aside.component";
import { CardComponent } from "../../components/card/card.component";
import { HeadComponent } from "../../components/head/head.component";
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavbarComponent, AsideComponent, CardComponent, HeadComponent, RouterModule, NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  isOpen:boolean = false
  id:number =0

  Open(id:number){
    this.id = id
    this.isOpen = !this.isOpen
  }

}
