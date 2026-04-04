import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, ExpenseItemComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  expenseService = inject(ExpenseService);

  expenses = this.expenseService.expenses;

  onDeleteExpense(id: string): void {
    this.expenseService.deleteExpense(id);
  }
}
