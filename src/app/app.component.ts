import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // debugger
  serverElements = [{}];
 

  onServerAdded(serverdata: {serverName: string, serverContent:string}){
    this.serverElements.push({
      type: 'server',
      name: serverdata.serverName,
      content: serverdata.serverContent
    })
  }
  
  onBlueprintAddded(blueprintData: {serverName: string, serverContent:string}){
  this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  })
  }


  parentFun(data: any){
    console.log(data);
    
  }













  // temp = '';
  // serverElements:any = [];
  // title = 'angularpractice';
  // add(event: Event){
  //   this.temp = (<HTMLInputElement>event.target).value
  //   this.serverElements.push({name:this.temp})
  //   console.log(this.serverElements);
  // }

}
