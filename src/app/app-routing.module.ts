import {NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
//import { SearchRippoComponent } from './search-rippo/search-rippo.component';
import {RepositoriesComponent} from './repositories/repositories.component'




const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'repositories', component: RepositoriesComponent},
  { path: '', redirectTo:"/header", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
