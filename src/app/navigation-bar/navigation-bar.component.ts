import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  nameSearch:string;
  @Output() searchOutput = new EventEmitter <any>()

  constructor() { }

  ngOnInit() {
  }
    search(){
      this.searchOutput.emit(this.nameSearch);
      this.nameSearch = ""; 
    }
  }


