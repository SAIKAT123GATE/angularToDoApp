import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Todo } from 'src/app/model/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

TodoServiceService
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  faTrash=faTrashAlt;
  title="";
  todos!:Todo[]
  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((eachTodo)=>{
      this.todos=eachTodo
    })
  }

  addTodo(){

  }

  changeTodo(todo:Todo){
    this.todoService.updateTodo(todo)
  }
  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo)
  }

}
