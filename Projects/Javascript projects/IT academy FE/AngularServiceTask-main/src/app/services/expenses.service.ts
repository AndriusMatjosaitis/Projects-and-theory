import { Injectable } from '@angular/core';
import {Expense} from "../shared/expense";
  import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private httpClient: HttpClient) { }

  loadExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>('/api/expenses');
  };

  getExpenseById(id: string): Observable<Expense> {
    return this.httpClient.get<Expense>(`/api/expenses/${id}`);
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(`/api/expenses`, expense);
  }
}
