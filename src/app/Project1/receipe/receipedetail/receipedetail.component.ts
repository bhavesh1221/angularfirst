import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';

@Component({
  selector: 'app-receipedetail',
  templateUrl: './receipedetail.component.html',
  styleUrls: ['./receipedetail.component.css']
})
export class ReceipedetailComponent implements OnInit {
  receipe: Receipe[] = [
    new Receipe('aaloo ka paratha', 'we will show how to make a aaloo ka pratha','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB'),
    new Receipe('aaloo ka paratha', 'we will show how to make a aaloo ka pratha','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
