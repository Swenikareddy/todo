import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  todoValue:string;
  list: Todo[];
  projectsLogo={
    logo:environment.logo,
  
  }
  ngOnInit(): void {
    this.list=[];
    this.todoValue="";
  }
  addItem(){
    if(this.todoValue!=""){
      const newItem: Todo={
        id:Date.now(),
        value:this.todoValue,
        isDone:false
      };
      this.list.push(newItem);
    }
    this.todoValue="";
  }
  deleteItem(id:number){
    this.list=this.list.filter(item=>item.id!=id);
  }
 
}
export interface Todo{
  id:number;
  value:string;
  isDone:boolean;
}
