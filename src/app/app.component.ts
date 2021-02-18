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
  colorClass = '';
  isDetailsShown : boolean = false;
  buttonClickArray = [];
  isClicked = 0;
  topic : string = 'Science';
    topicQuestion : any = "Whats ur name?";
    topicAnswer : any = '';
    topicArray : Topic[]  = [
        {value: 'science', viewValue: 'Science'},
        {value: 'history', viewValue: 'History'},
        {value: 'maths', viewValue: 'Mathematics'}
      ];
      addDetails(){
        if(!this.isDetailsShown){
          this.isDetailsShown  = true
         } else {
          this.isDetailsShown  = false
         }
         console.log(this.isDetailsShown);
         this.isClicked ++ ;
         console.log(this.isClicked);
         this.buttonClickArray.push(this.isClicked);
         console.log(this.buttonClickArray);
      }
      changeColor(val){
        console.log(val)
        if ( val = 5) {
          this.colorClass == "color : red";
          return this.colorClass;
        }
      }
}
