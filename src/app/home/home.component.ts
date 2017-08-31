import {Component} from '@angular/core';
import {SimpleService} from '../services/services.module';

@Component({
  selector: 'home',
  template: `
    <div>I am Home Component</div>
    <div>{{ simpleService.message }}</div>
    <widget-one [message]="simpleService.message"></widget-one>
    <widget-one [message]="'Hello world'"></widget-one>
    <widget-two></widget-two>`
})

export class HomeComponent
{
    constructor(private simpleService: SimpleService){}
}
