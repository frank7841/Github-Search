// 1414caf962b667337d521961b7ab11a48194957e 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
//import { SearchRippoComponent } from './search-rippo/search-rippo.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { DatepipePipe } from './datepipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
  //  SearchRippoComponent,
    SearchFormComponent,
    RepositoriesComponent,
    DatepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
