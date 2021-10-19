/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ng-app',
    template: `<form (submit)="submitForm($event)" novalidate>
                    <h2>Login</h2>
                    <br/>
                    <input type="email" [value]="email" (input)="email = $event.target.value" name="email" />
                    <br/>
                    <input type="password" [value]="password" (input)="password = $event.target.value" name="password" />
                    <button type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email: string = "";
    password: string = "";

    logged_in = false;

    submitForm(ev) {
        ev.preventDefault()
        this.logged_in = this.validateForm(this.email, this.password);
    }

    validateForm(email, password) {
        const emailAndPasswordValid = this.isEmailValid(email) && this.isPasswordValid(password);
        return emailAndPasswordValid;
    }

    isEmailValid(email: string) {
        const emailPattern = /^\S+@\S+\.\S+$/;
        const isValidEmail = emailPattern.test(email);
        return isValidEmail;
    }

    isPasswordValid(password: string) {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        const isPasswordValid = passwordPattern.test(password);
        return isPasswordValid;
    }
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: Test03Component
            }
        ])
    ],
    declarations: [Test03Component]
})
export class Test03Module { };