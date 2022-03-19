import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  enable = true;
  text = "before click";
  sometext = "hello"
  constructor() {
    setTimeout(() => {
      this.enable = false;
    },3000 );
  }

  ngOnInit(): void {}
  onClick(){
    this.text = `after click`;
  }
  onlck(event: Event){
    this.sometext = (<HTMLInputElement>event.target).value;
  }  
}
