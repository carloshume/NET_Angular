import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MyTestComponent } from './app_test';
import { MyTestComponent2 } from './app_test2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyTestComponent,MyTestComponent2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-AngularApp');
}
