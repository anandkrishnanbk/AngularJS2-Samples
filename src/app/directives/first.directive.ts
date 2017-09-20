import {Component, Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[first]'
}
)

export class FirstDirective{
  @Input() first;
  //@HostBinding() innerText = `I am a directive`;
  @HostBinding() get innerText()
  {
    return this.first;
  }
  @HostListener('click',['$event']) onClick($event){
      this.first = 'clicked';
  }

}
@Component({
  selector:'basic',
  template:`<h1>{{basicText}}</h1>`
})
export class  BasicComponent{
  @Input() basicText;
}

@Component({
  selector: 'DirectiveSample',
  template: `
  <basic [first]="firstText"></basic>
  <basic [first]="secondText"></basic>
  <basic [first]="thirdText"></basic>`
})

export class DirectiveComponent{

  firstText="My first text update";
  secondText="My second text update";
  thirdText="My third text update";
}

/*
template: `<h1 first></h1>
  <h2></h2>
  <h3 first></h3>
 */

