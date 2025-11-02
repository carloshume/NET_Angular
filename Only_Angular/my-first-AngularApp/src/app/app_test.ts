import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './appTest.html',
  standalone: true
  //styleUrl: './app.css'
})
export class MyTestComponent {
  //  protected readonly title = signal('my-first-AngularApp');
  osList = [{id:1, name: 'Alex'},{id:2, name:'Andres'},{id:3, name: 'Carlos'}];

}
