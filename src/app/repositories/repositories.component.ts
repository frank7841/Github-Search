import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../services/myservice.service'
import {Repos} from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo:Repos;
  constructor(public repoService: MyserviceService) { }

  repoSearch(searchName){
    this.repoService.getRepo(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('Frankline Simiyu');
  }
 
}
