import { Component }  from '@angular/core';

@Component({
  selector:'widget-one',
  template:`<div *ngIf="selected">widget one</div>`
})

export class WidgetOne{
  selected=true;
}
