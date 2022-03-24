import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todos!:Todo[];
  constructor() {
    var todoItems=localStorage.getItem("todo");
    if(todoItems){
      console.log("todoItems=>",todoItems);
      this.todos=JSON.parse(todoItems);
    }
    else{
      this.todos=[]
    }

    // this.todos=[
    //   {
    //     id:"1",
    //     title:"Coding",
    //     isCompleted:true,
    //     date:new Date()
    //   },
    //   {
    //     id:"2",
    //     title:"Sleep",
    //     isCompleted:false,
    //     date:new Date()
    //   }
    // ]
   }

   getTodos(){
      return of(this.todos)
   }

   addTodo(todo:Todo){
     this.todos.push(todo)
     localStorage.setItem("todo",JSON.stringify(this.todos))
   }

   updateTodo(todo:Todo){
     this.todos.map((eachTodo:Todo)=>{
       if(eachTodo.id==todo.id){
         eachTodo.isCompleted=!eachTodo.isCompleted
       }
     })
     localStorage.setItem("todo",JSON.stringify(this.todos))
   }

   deleteTodo(todo:Todo){
     var index:any=this.todos.findIndex((eachData)=>eachData.id==todo.id)
     this.todos.splice(index,1)
     localStorage.setItem("todo",JSON.stringify(this.todos))
   }
}
