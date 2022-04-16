import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpensesComponent} from "./expenses/expenses.component";
import {BudgetsComponent} from "./budgets/budgets.component";
import {HomeComponent} from "./home/home.component";
import {ExpenseDetailsComponent} from "./expense-details/expense-details.component";
import {FilterExpenseGuard} from "./guards/filter-expense.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  {
    path: 'expense/:id',
    component: ExpenseDetailsComponent,
    canActivate: [FilterExpenseGuard],
  },
  { path: 'budgets', component: BudgetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
