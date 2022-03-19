import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
@Component({
  selector: 'app-apicallonkeypress',
  templateUrl: './apicallonkeypress.component.html',
  styleUrls: ['./apicallonkeypress.component.css']
})
export class ApicallonkeypressComponent implements OnInit {

  constructor( private api:ApiService ) { }
  name:any =  [];
  id: number = 0;
  ngOnInit(): void {
  }
  Onkeypress(event:any) {
    const eve = event.target.value;
    console.log(eve);
    
    this.api.apiCall().subscribe((data: any) => {
      console.log(data);
      if(eve == data[8].name){
        this.show(data)
      }
    })
  }
  
  show(data: any){
    this.name =  data[0].name      
    this.id =  data[0].id      
  }
}

