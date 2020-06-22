import { Injectable } from '@angular/core';
import{Users} from '../users';
import{HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment.prod';
import {Repos} from '../repos'


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userFind:Users;

  constructor(private http: HttpClient) {
    this.userFind = new Users("","","","",0,0,0,"",new Date);
   }
   userSeach(nameSearch: string){
     interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;

     }
     return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+nameSearch+'?access_token='+environment.apiKey).toPromise().then(
        (result) => {
          this.userFind = result;
          console.log(this.userFind);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepo(nameSearch){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+nameSearch+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
        (results) => {
          this.allRepos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}


  }
}