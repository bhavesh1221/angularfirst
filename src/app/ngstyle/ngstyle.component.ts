import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  server: string = 'offline'
  dependnt: boolean = true;
  one = 'redcolor'
  redclor: string = 'red' 
  greenclor: string = 'green' 

  items = ['apple', 'banana', 'mango']
  listfromapi = 'bhavesh'
  temp:string = ''
  constructor() {
    this.server = Math.random() > 0.5? 'online' : 'offline'
   }

  ngOnInit(): void {
  }
  getserverstatus(){
    return this.server;
  }
  getColor(){
    return this.server == 'online' ? 'green' : 'red'
  }
  getColorngclass() {
    if(this.server == 'online'){
      return true;
    }
    else{
      return false;
    }
  }
  
  add(event: Event){
    this.listfromapi = (<HTMLInputElement>event.target).value
  }
  added(){
    this.items.push(this.listfromapi);
  }

}
