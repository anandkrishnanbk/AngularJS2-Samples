import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-form',
  template: `
    {{message}}
   <input #myInput type="text" />
   <button (mouseover)="onClick($event,myInput.value)">Click button</button>
  `,
  styles: [`:host{
    display: flex;
    flex-direction: column;
  }
    
    input:focus{
      font-weight: bold;
      outline:none
    }
    input{
      margin-bottom: 5px;
    }
    button{
      border:none;
      background-color: green;
      color:white;
    }
    *{
      font-family: Helvetica;
    }
  
  `]
})
export class MyFormComponent implements OnInit {
 @Input() message;
  constructor() {
   }
  onClick(event,value)
  {
    console.log(event);
    console.log('button clicked - ' +value);
  }

  ngOnInit() {
  }

}
