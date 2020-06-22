import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../services/myservice.service';
import {Users} from '../users'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
