import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  arr:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  add(item: string){
    this.arr.push({id:this.arr.length, name:item});
    console.log(this.arr);
  }
  remove(id:number){
    this.arr = this.arr.filter(item => item.id!==id);
  }
}
