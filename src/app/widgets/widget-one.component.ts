import { Component,Input }  from '@angular/core';

@Component({
  selector:'widget-one',
  template:`<div *ngIf="selected">widget one</div>
  <h3 style="color:red;">{{message}}</h3>`,
  styles: [`
    :host{
      display: block;
      border: 3px solid red;
      font-family:"Times New Roman";
      }
  `]
})

export class WidgetOne{
  @Input() message;
  selected=true;
}
