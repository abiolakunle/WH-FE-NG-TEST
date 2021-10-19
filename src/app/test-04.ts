/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, 
 * then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ng-app',
    template: `
                <h2>Enter your first and last name</h2>
                <div>
                <form>
                    <input type="text" [(value)]="firstName" (change)="firstNameChanged($event)" name="firstName" />
                    <input type="text" [(value)]="lastName" (change)="lastNameChanged($event)" name="lastName" />
                    {{userName}}
                </form>
                </div>
                `,
    styles: []
})
export class UserNameComponent {

    userName: string = ""
    firstName: string = ""
    lastName: string = ""

    firstNameChanged(ev) {
        const firstName = ev.target.value
        this.firstName = firstName;

        if (!!this.lastName) {
            this.userName = `${firstName}_${this.lastName}_${this.generateRandomNumber(1, 9)}`.toLowerCase();
        }
    }

    lastNameChanged(ev) {
        const lastName = ev.target.value;
        this.lastName = lastName;

        if (!!this.firstName) {
            this.userName = `${this.firstName}_${lastName}_${this.generateRandomNumber(1, 9)}`.toLowerCase();
        }
    }

    generateRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: UserNameComponent
            }
        ])
    ],
    declarations: [UserNameComponent]
})
export class UserNameModule { };