import { Component } from '@angular/core';

interface Topic {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  topic : string = 'Science';
    topicQuestion : any = "Whats ur name?";
    topicAnswer : any = '';
    topicArray : Topic[]  = [
        {value: 'science', viewValue: 'Science'},
        {value: 'history', viewValue: 'History'},
        {value: 'maths', viewValue: 'Mathematics'}
      ];
}
