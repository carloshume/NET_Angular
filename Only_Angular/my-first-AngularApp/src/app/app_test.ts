import { Component, signal, input, inject } from '@angular/core';
import { users } from './model/users';
import { Data } from './services/data';

@Component({
  selector: 'app-test',
  templateUrl: './appTest.html',
  standalone: true
  //styleUrl: './app.css'
})
export class MyTestComponent {
  readonly Users = input<users>();

  //  protected readonly title = signal('my-first-AngularApp');
  osList = [{id:1, name: 'Alex'},{id:2, name:'Andres'},{id:3, name: 'Carlos'}];

  //dataService = inject(Data);

}
