import { Component, OnInit } from '@angular/core';
import { Shoppinglists } from '../../shared/shoppinglists.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  shoppinglist: Shoppinglists[] = [
    new Shoppinglists('Apple', 50)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
