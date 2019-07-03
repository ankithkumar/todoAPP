import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  states = [{
      Name: 'tasks',
      href: ''
    },{
      Name: 'completed',
      href: '/completed'
    }
  ];

  constructor(private router: Router) {
    console.log('in App');
  }

  navigateTo(event) {
    console.log('event ', event);
    this.router.navigate([this.states[event.index].href]);
  }
}
