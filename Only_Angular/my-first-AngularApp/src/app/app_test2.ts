import { Component, signal, input, output } from '@angular/core';
import { users } from './model/users';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-test2',
  templateUrl: './appTest2.html',
  standalone: true
  //styleUrl: './app.css'
})
export class MyTestComponent2 {
  readonly Users = input<users>();

  readonly CustomEventOutput = output<string>();

  data = {
    title: 'by Mr.H controls from ROOT!',
    buttonName: 'click HERE!'
  };

  onKeyUp(newTitle: string){
    this.data.title = newTitle;
  };

  emitData() {
        this.CustomEventOutput.emit('Hello from child BUTTON!'); // Emits the data
  }
}
