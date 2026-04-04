import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseCategory, Expense } from '../../models/expense.model';

@Component({
  selector: 'app-edit-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-expense.component.html',
  styleUrl: './edit-expense.component.css'
})
export class EditExpenseComponent implements OnInit {
  expenseService = inject(ExpenseService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  expenseId: string = '';
  title: string = '';
  amount: number = 0;
  category: ExpenseCategory = 'Personal';
  categories = this.expenseService.categories;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.expenseId = params.get('id') || '';
      const expense = this.expenseService.getExpenseById(this.expenseId);
      if (expense) {
        this.title = expense.title;
        this.amount = expense.amount;
        this.category = expense.category;
      }
    });
  }

  updateExpense(): void {
    if (this.title.trim() && this.amount > 0) {
      this.expenseService.updateExpense(this.expenseId, {
        title: this.title,
        amount: this.amount,
        category: this.category
      });

      this.router.navigate(['/expenses']);
    }
  }

  cancel(): void {
    this.router.navigate(['/expenses']);
  }
}
