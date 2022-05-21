import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverElements :Array<{content: string, name: string, type: string}> = [] ;
  
   @Output() servercreated = new EventEmitter<{serverName: string, serverContent: string}>();
   @Output() blueprintcreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';
  @Output() parentfn: EventEmitter<any> = new EventEmitter();
  @ViewChild('serverInput') serverInput: any
  constructor() {}

  ngOnInit(): void {
    this.parentfn.emit("bhavesh");
  }

onAddserver(){
  console.log("osmehitng");
  
  this.servercreated.emit({
    serverName: this.serverInput,
    serverContent: this.newServerContent
  });
}

onAddBlueprint(serverInput:string){
 this.blueprintcreated.emit({
   serverName: serverInput,
   serverContent: this.newServerContent
 })
}
}
