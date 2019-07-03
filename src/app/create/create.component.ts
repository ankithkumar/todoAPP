import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Subscription } from 'rxjs';
import { Tasks } from '../interface/task.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private taskService: TasksService) { 

  }

  ngOnInit() {
  }

  storeVal(event) {
    if (event.keyCode === 13 && event.target.value != '' && event.target.value != null) {
      console.log('store val to the list ', event.target.value);
      this.taskService.addToTasks(event.target.value)
    }
  }
}
