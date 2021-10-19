/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input, NgModule, } from '@angular/core';

import { RouterModule } from "@angular/router";

import { CommonModule } from '@angular/common';




@Component({
    selector: 'ng-app',
    template: `<div>
                  <h2>Loan Details</h2>
                    <b>Monthly Payment:</b>  {{isLoanAmountAvailable() ? (monthly_payment | currency:'USD':'symbol': '1.0-0') : 'N/A'}} <br/>
                    <b>Late Payment Fee : {{isLoanAmountAvailable() ? (late_payment | currency:'USD':'symbol': '1.0-0')  : 'N/A'}}</b> <br/>
                </div>`
})
export class Test01Component {

    loan_amount: number = 1000;
    monthly_payment: number = 200;
    late_payment = 10;

    ngOnInit() {
        this.updatePaymentValues();
    }


    updatePaymentValues() {
        this.monthly_payment = this.calculateMonthlyPayment(this.loan_amount);
        this.late_payment = this.calculateLatePayment(this.monthly_payment);
    }

    isLoanAmountAvailable = () => !!this.loan_amount;

    calculateLatePayment(monthlyPayment: number) {
        return 0.05 * monthlyPayment;
    }

    calculateMonthlyPayment(loanAmount: number) {
        return 0.02 * loanAmount;
    }

}

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                component: Test01Component
            }
        ]),
        CommonModule
    ],
    declarations: [Test01Component],
    providers: []
})
export class Test01Module { }