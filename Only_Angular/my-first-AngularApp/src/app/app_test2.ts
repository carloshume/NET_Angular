import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './appTest2.html',
  standalone: true
  //styleUrl: './app.css'
})
export class MyTestComponent2 {
  data = {
    title: 'by Mr.H controls from ROOT!'
  };

  onKeyUp(newTitle: string){
    this.data.title = newTitle;
  }
}
