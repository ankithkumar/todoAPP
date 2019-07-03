import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tasks } from '../interface/task.interface';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
  completedTask: Tasks[] = [];
  private subscription: Subscription;

  constructor(private taskService: TasksService) {
    this.taskService.getTaskUpdatedListener().subscribe(tasks => {
      this.filterCompletedTask(tasks);

    })
    this.taskService.getTasks();
  }

  filterCompletedTask(tasks: Tasks[]) {
    this.completedTask = tasks.filter(task => task.isComplete);
  }
  
  ngOnInit() {
  }

}
