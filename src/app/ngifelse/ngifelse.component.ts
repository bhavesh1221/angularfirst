import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent implements OnInit {
  heading:boolean = false;
  constructor() { }

  ngOnInit(): void {
   
  }
  click(){
    this.heading = true;
  }
}
