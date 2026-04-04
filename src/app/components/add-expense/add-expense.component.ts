import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseCategory } from '../../models/expense.model';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  expenseService = inject(ExpenseService);
  router = inject(Router);

  title: string = '';
  amount: number = 0;
  category: ExpenseCategory = 'Personal';

  categories = this.expenseService.categories;

  addExpense(): void {
    if (this.title.trim() && this.amount > 0) {
      this.expenseService.addExpense({
        title: this.title,
        amount: this.amount,
        category: this.category
      });

      // Reset form
      this.title = '';
      this.amount = 0;
      this.category = 'Personal';

      // Navigate to expenses
      this.router.navigate(['/expenses']);
    }
  }
}
