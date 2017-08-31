import {Component, ComponentFactoryResolver, ViewContainerRef,ViewChild} from '@angular/core';
import {SimpleService} from '../services/services.module';
import {WidgetThree} from "../widgets/widget-three.component";
import {WidgetFourComponent} from "../widgets/widget-four.component";

@Component({
  selector: 'home',
  template: `
    <div>I am Home Component</div>
    <div>{{ simpleService.message }}</div>
    <widget-one [message]="simpleService.message"></widget-one>
    <widget-one [message]="'Hello world'"></widget-one>
    <widget-two><widget-one [message]="simpleService.message"></widget-one> Hi, I am anand</widget-two>
  <widget-two>
    <h2 class="header">header</h2>
    <p para>Some content</p>
    <h3 footer>footer</h3>
  </widget-two>
  <widget-three></widget-three>
  <div #container></div>`
})

export class HomeComponent
{
  @ViewChild('container',{read:ViewContainerRef}) container;
    constructor(private simpleService: SimpleService,private resolver: ComponentFactoryResolver){}
    ngOnContentInit()
    {
      const widgetFactory=this.resolver.resolveComponentFactory(WidgetFourComponent);
       this.container.createComponent(widgetFactory);
      this.container.createComponent(widgetFactory);
    }
}
