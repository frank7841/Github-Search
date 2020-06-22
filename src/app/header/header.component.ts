import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../services/myservice.service';
import {Users} from '../users'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:Users;

  constructor(public getService: MyserviceService) { }
  searchs(nameSearch){
    this.getService.userSeach(nameSearch).then(
      (success)=>{
        this.user = this.getService.userFind;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  ngOnInit(){
    this.searchs('frank-simiyu')
  }

}
