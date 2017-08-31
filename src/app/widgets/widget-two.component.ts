import  {Component} from "@angular/core";

@Component({
  selector:'widget-two',
  template:`<div>widget two</div>
  <ng-content select=".header"></ng-content>
  <ng-content select="[para]"></ng-content>
  <ng-content select="[footer]"></ng-content>`
})

export class WidgetTwo{}
