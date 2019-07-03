import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tasks } from '../interface/task.interface';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  tasks : Tasks[] = [];
  private subject = new Subject<any>();

  constructor(private router: Router) { 
    console.log('this is tasks service!!');
  }

  raiseTasksUpdatedListener() {
    this.subject.next([...this.tasks]);
  }

  getTasks() {
    this.raiseTasksUpdatedListener();
  }

  addToTasks(name : string) {
    let obj: Tasks = {
      name,
      isComplete: false
    };
    this.tasks.push(obj);
    this.raiseTasksUpdatedListener();
  }

  getTaskUpdatedListener(): Observable<Tasks[]> {
    return this.subject.asObservable();
  }

  findIndex(task) {
    return this.tasks.findIndex((taskItem: Tasks) => {
      return taskItem.name === task.name;
    });
  }
  updatedTasks(oldTask: Tasks, newTask: string) {
    let index = this.findIndex(oldTask);
    if (index !== -1) {
      this.tasks[index].name = newTask;
      this.raiseTasksUpdatedListener();
    }
  }

  deleteTask(task: Tasks) {
    let index = this.findIndex(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.raiseTasksUpdatedListener();
    }
  }

  markItComplete(task: Tasks) {
    let index = this.findIndex(task);
    if (index != -1) {
      this.tasks[index].isComplete = true;
      this.raiseTasksUpdatedListener();
    }
  }


}
