import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one.component"
import {CommonModule} from "@angular/common";
import {WidgetTwo} from "./widget-two.component";
import {WidgetThree} from "./widget-three.component";
import { WidgetFourComponent } from "./widget-four.component";


@NgModule({
declarations:[WidgetOne,WidgetTwo, WidgetThree,WidgetFourComponent],
exports:[WidgetOne,WidgetTwo,WidgetThree,WidgetFourComponent,CommonModule],
imports:[CommonModule]
})

export class WidgetModule{}
