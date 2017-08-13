import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MailService } from './mail.service';
import {HomeModule} from "./home/home.module";
import {WidgetModule } from "./widgets/widget-one.module"

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,HomeModule,WidgetModule
  ],
  providers: [
    {provide:'mail',useClass:MailService},
    {provide:'api',useValue:'http://localhost3000/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

