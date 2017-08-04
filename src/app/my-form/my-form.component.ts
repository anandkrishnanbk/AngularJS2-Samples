import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-form',
  encapsulation:ViewEncapsulation.Native,
  template: `
    {{message}}
   <input #myInput type="text" [ngClass]="{mouseDown:isMouseDown}" (mousedown)="isMouseDown = true" (mouseup)="isMouseDown = false" (mouseleave)="isMouseDown =false">
   <button class="white bg-black code" (mouseover)="onClick($event,myInput.value)"  >Click button</button>
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
     // background-color: green;
      color:white;
    }
    .mouseDown{
      border:3px solid red;
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
