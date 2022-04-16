import { Component, OnInit } from '@angular/core';
import {Expense} from "./expenseClass";
import {ExpensesService} from "../services/expenses.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  expense: Expense = new Expense('', '', '');

  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
  }
  addExpense() {
    this.expensesService.addExpense(this.expense).subscribe(() => {
      this.expense = new Expense('','','');
    });
  }
  resetExpense() {
    this.expense = new Expense('','','');
  }
}
