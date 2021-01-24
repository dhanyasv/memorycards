import { Component, OnInit } from '@angular/core';

interface Topic {
    value: string;
    viewValue: string;
  }

@Component({
    selector : 'card-form',
    templateUrl : './food.component.html',
    styleUrls : ["food.component.css"]
})

export class FoodComponent implements OnInit {
    topic : string = 'Science';
    topicQuestion : any = "Whats ur name?";
    topicAnswer : any = '';
    topicArray : Topic[]  = [
        {value: 'science', viewValue: 'Science'},
        {value: 'history', viewValue: 'History'},
        {value: 'maths', viewValue: 'Mathematics'}
      ];

    ngOnInit () {
    }

}