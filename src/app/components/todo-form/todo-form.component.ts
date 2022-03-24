import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';
// import { v4 as uuidv4 } from 'uuid';
import * as uuid from 'uuid';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService:TodoServiceService) { }
  title!:string
  ngOnInit(): void {
  }

  addTodo(){
    var newTodo:Todo={
      id:uuid.v4(),
      title:this.title,
      isCompleted:false,
      date:new Date()
    }
    this.todoService.addTodo(newTodo)
    this.title=""
  }

}
