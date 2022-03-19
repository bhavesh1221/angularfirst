import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showingdata',
  templateUrl: './showingdata.component.html',
  styleUrls: ['./showingdata.component.css']
})
export class ShowingdataComponent implements OnInit {
  // @Input() element: { name: string, content: string, type: string } | undefined;
  // @Input() element: Array<{name: string, type: string, content: string}> = [];
  @Input('serElement') element: any;
  constructor() { }

  ngOnInit(): void {
    console.log("name ", this.element.name , " type " + this.element.type);
    
  }

}
