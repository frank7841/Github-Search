import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../services/myservice.service'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
