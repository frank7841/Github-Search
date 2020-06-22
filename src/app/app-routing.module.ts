import {NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchRippoComponent } from './search-rippo/search-rippo.component';




const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'search-rippo', component: SearchRippoComponent},
  {path: "", redirectTo:"/user", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
