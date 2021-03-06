import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses.service';
import { explicitLanguageValidator } from './validators/explicit-language.validator';
import { nameNoteValidator } from './validators/name-note.validator';
import { regulatoryValidator } from './validators/regulatory.validator';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  @Output() expenseUpdated: EventEmitter<void> = new EventEmitter();
  expenseForm: FormGroup;
  maximumNoteLength = 20;
  remainingLength$: Observable<number> = of(this.maximumNoteLength);

  get expenseName() {
    return this.expenseForm.get('name');
  }

  get expenseDate() {
    return this.expenseForm.get('date');
  }

  get expenseAmount() {
    return this.expenseForm.get('amount');
  }

  get expenseNote() {
    return this.expenseForm.get('note');
  }

  constructor(private expensesService: ExpensesService) {
    this.expenseForm = new FormGroup(
      {
        name: new FormControl('', {
          validators: [Validators.required, Validators.pattern('[a-zA-Z]*')],
        }),
        date: new FormControl('', { validators: [Validators.required] }),
        amount: new FormControl('', {
          validators: [Validators.required, Validators.maxLength(5)],
        }),
        note: new FormControl('', {
          updateOn: 'blur',
          validators: [
            Validators.maxLength(this.maximumNoteLength),
            explicitLanguageValidator,
          ],
          asyncValidators: [regulatoryValidator(this.expensesService)],
        }),
      },
      { validators: [nameNoteValidator] }
    );
  }

  ngOnInit(): void {
    this.remainingLength$ = this.expenseNote!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.maximumNoteLength - value.length)
    );
  }

  addExpense() {
    const expense = this.expenseForm.getRawValue();
    this.expensesService.addExpense(expense).subscribe(() => {
      this.expenseUpdated.emit();
      this.resetExpense();
    });
  }

  resetExpense() {
    this.expenseForm.reset();
  }
}
