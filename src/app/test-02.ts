/**
 * Update the following components to meet the requirements : 
 * * Bind [field] of [textfield] component to its text input
 * * Pass value of [field] from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'textfield',
    template: '<input type="text" [value]="field" (input)="inputChanged($event)" />'
})
export class TextField {
    field = "";

    @Output() valueChanged: EventEmitter<string> = new EventEmitter();

    ngOnInit() {

    }

    inputChanged(ev) {
        this.valueChanged.emit(ev.target.value);
    }


}

@Component({
    selector: 'child-component',
    template: `<h2>Title:<h2><br/><textfield (valueChanged)="inputChanged($event)"></textfield>`
})
export class ChildComponent {

    @Output() valueChanged: EventEmitter<string> = new EventEmitter();

    inputChanged(newValue: string) {
        this.valueChanged.emit(newValue);
    }
}


@Component({
    selector: 'ng-app',
    template: `<div>
                    <child-component (valueChanged)="changeTitle($event)"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title: string = "";

    changeTitle(newTitle: string) {
        this.title = newTitle;
    }
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: Test02Component
            }
        ])
    ],
    declarations: [Test02Component, ChildComponent, TextField]
})
export class Test02Module { };