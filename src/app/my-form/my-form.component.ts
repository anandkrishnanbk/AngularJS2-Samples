import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  template: `
   <input #myInput type="text" />
   <button (mouseover)="onClick($event,myInput.value)">Click button</button>
  `,
  styles: []
})
export class MyFormComponent implements OnInit {

  constructor() { }
  onClick(event,value)
  {
    console.log(event);
    console.log('button clicked - ' +value);
  }

  ngOnInit() {
  }

}
