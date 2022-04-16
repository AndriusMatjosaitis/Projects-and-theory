import {Injectable} from '@angular/core';
import {Expense} from "../types";
import {expenses} from "../expenses";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  expenses: Expense[];

  constructor() {
    this.expenses = expenses;
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  getExpense(id: string): Expense | undefined {
    return this.expenses.find(item => item.id === id);
  }
}
