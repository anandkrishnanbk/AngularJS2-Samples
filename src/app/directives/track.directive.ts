import { Directive, Input, HostListener, Component, Injectable } from '@angular/core';
@Injectable()

export class TrackService {
  logs=[];
  log(trackingEvent){
    this.logs.push(trackingEvent);
    console.log(trackingEvent);
  }
}

@Directive({
  selector:'[trackey]'
})

export class TrackDirective {
  @Input() trackey;
  @HostListener('click') onClick()
  {
    this.tracking.log({event:'click',message:this.trackey})
  }
  constructor(private tracking: TrackService) {}
}

@Component({
    selector:'track',
    template:`<button [trackey]="'One Button'">First Button</button>
    <button [trackey]="'Two Button'">Second Button</button>
    <button [trackey]="'Three Button'">Third Button</button>`
  })

export class TrackComponent {
  constructor(private tracking: TrackService) {}
}




