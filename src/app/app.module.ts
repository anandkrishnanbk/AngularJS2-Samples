import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MailService } from './mail.service';
import {HomeModule} from "./home/home.module";
import { BasicComponent,FirstDirective, DirectiveComponent } from "./directives/first.directive";
import {WidgetModule } from "./widgets/widget-one.module"
import {ServicesModule} from "./services/services.module";
import { TrackComponent, TrackDirective, TrackService } from "./directives/track.directive";

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DirectiveComponent,
    FirstDirective,
    BasicComponent,
    TrackComponent,
    TrackDirective
  ],
  imports: [
    BrowserModule,
    HomeModule,
    WidgetModule,
    ServicesModule.forRoot()
  ],
  providers: [
    TrackService,
    {provide:'mail',useClass:MailService},
    {provide:'api',useValue:'http://localhost3000/'}],
    bootstrap: [AppComponent]
})
export class AppModule { }

