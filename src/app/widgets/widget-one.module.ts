import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one.component"
import {CommonModule} from "@angular/common";
import {WidgetTwo} from "./widget-two.component";


@NgModule({
declarations:[WidgetOne,WidgetTwo],
exports:[WidgetOne,WidgetTwo,CommonModule],
imports:[CommonModule]
})

export class WidgetModule{}
