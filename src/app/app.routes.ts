import { Routes } from '@angular/router';
import { CraphComponent } from './layout/craph/craph.component';
import { ListComponent } from './layout/list/list.component';

export const routes: Routes = [
  {path:"craph" , component:CraphComponent, title:"Graph"},
  {path:"" , redirectTo:"craph", pathMatch:"full" },
  {path:"list" , component:ListComponent, title:"list"},
];
