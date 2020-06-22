import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../services/myservice.service';
import {Users} from '../users';
import {Repos} from '../repos';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:Users;
  repo:Repos;

  constructor(public getService: MyserviceService, private repoService:MyserviceService) { }
  searchs(nameSearch){
    this.getService.userSeach(nameSearch).then(
      (success)=>{
        this.user = this.getService.userFind;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getRepo(nameSearch).then(
      (results)=>{
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
}

  ngOnInit(){
    this.searchs('frank-simiyu')
  }

}
