import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {WidgetModule} from "../widgets/widget-one.module";

@NgModule({
  declarations:[HomeComponent],
  exports:[HomeComponent],
  imports:[WidgetModule]
})

export class HomeModule{}
