import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Subscription } from 'rxjs';
import { Tasks } from '../interface/task.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../materials/edit-task-dialog/edit-task-dialog.component';
import { DeleteTaskDialogComponent } from '../materials/delete-task-dialog/delete-task-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: Tasks[] = [];
  private subscription: Subscription;

  constructor(private taskService: TasksService, private dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.taskService.getTaskUpdatedListener().subscribe(tasks => {
      this.tasks = tasks;
      console.log('tasks ', tasks);
    });
    this.taskService.getTasks()
  }

  cb(tasks: Tasks[]) {
    console.log('cb has ', tasks);
    this.tasks = tasks;
  }

  deleteTask(task: Tasks) {
    console.log('delete task ', task);
    let dialogRef = this.dialog.open(DeleteTaskDialogComponent, {
      disableClose: true,
      width: '100%',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result ', result);
      console.log('task to be changes was ', task);
      if (result) {
        this.taskService.deleteTask(task);
      }
    });
  }

  editTask(task: Tasks) {
    console.log('edit task ', task);
    let dialogRef = this.dialog.open(EditTaskDialogComponent, {
      panelClass: 'full-screen-dialog-container',
      disableClose: true,
      width: '100%',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result ', result);
      console.log('task to be changes was ', task);
      if (result) {
        this.taskService.updatedTasks(task, result);
      }
    });
  }

  completeTask(task: Tasks) {
    this.taskService.markItComplete(task);
  }
}
