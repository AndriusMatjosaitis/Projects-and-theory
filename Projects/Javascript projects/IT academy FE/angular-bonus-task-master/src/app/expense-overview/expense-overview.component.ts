import {Component, Input, OnInit} from '@angular/core';
import {Expense} from "../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.component.html',
  styleUrls: ['./expense-overview.component.css']
})
export class ExpenseOverviewComponent implements OnInit {
  @Input() expense: Expense | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onExpenseClick(expense: Expense): void {
    this.router.navigate(['/expenses/', expense.id]);
  }
}
