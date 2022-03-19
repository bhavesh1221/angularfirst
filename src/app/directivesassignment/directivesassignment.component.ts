import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesassignment',
  templateUrl: './directivesassignment.component.html',
  styleUrls: ['./directivesassignment.component.css']
})
export class DirectivesassignmentComponent implements OnInit {
  state = false;
  arr = [];
  i = 0;
  constructor() { }

  ngOnInit(): void {
  }
  status(){
    this.state = !this.state
    console.log(this.state);
    this.i++;
    console.log("i",this.i);
    
  }
  ngclasssfun(){
    if(this.i>5){
      return true
    }
    else{
      return false
    }
  }
}
