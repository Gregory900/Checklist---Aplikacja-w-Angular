import { Component } from '@angular/core';
import { Tasks } from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todayDate : Date = new Date();
  editMode = true;
  taskName = '';
  title = 'Checklist';
  undertitle = "Sporządź swoją personalną listę zadań :)";
  footer = "Aplikacja Checklist utworzona przez Grzegorza Waligórskiego ©"

  tasks: Tasks [] = [];

  clearTask(){
    this.tasks=[];
  }

  createTasks(date:string){
    const task: Tasks ={
      name: this.taskName,
      date: date,
      done: false,
    };
    this.tasks.push(task);
    this.taskName="";
  }
  
  switchEditMode(){
    this.editMode = !this.editMode;
  }

  taskDone(tasks: Tasks){
    tasks.done=true;
    this.sortTasks()
  }

  taskDelete(tasks: Tasks){
    this.tasks = this.tasks.filter(e => e !== tasks);
    this.sortTasks()
  }

  private sortTasks(){
    this.tasks = this.tasks.sort((a: Tasks, b: Tasks ) =>
    a.done === b.done ? 0 : a.done ? 1 : -1);
  }


}
