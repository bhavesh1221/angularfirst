import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverElements :Array<{content: string, name: string, type: string}> = [] ;
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  
onAddserver(){
  // this.serverElements.push({
  //   type: 'server',
  //   name: this.newServerName,
  //   content: this.newServerContent
  // })
  // console.log(this.newServerName);
}

onAddBlueprint(){
// this.serverElements.push({
//   type: 'blueprint',
//   name: this.newServerName,
//   content: this.newServerContent
// })
// console.log(this.newServerContent);
}

}
