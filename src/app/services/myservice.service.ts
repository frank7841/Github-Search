import { Injectable } from '@angular/core';
import{Users} from '../users';
import{HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userFind:Users;

  constructor(private http: HttpClient) {
    this.userFind = new Users("","","","",0,0,0,"",new Date);
   }
}
