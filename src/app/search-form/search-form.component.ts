import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  nameSearch:string;
  @Output() searchOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit(){
  }
  search(){
    this.searchOutput.emit (this.nameSearch);
    this.nameSearch = ""
  }
  }


