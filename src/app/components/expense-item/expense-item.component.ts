import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css'
})
export class ExpenseItemComponent {
  @Input() expense!: Expense;
  @Output() deleteExpense = new EventEmitter<string>();
  router = inject(Router);

  // Get category color
  getCategoryColor(): string {
    const colors: Record<string, string> = {
      Work: 'primary',
      Personal: 'info',
      Grocery: 'success',
      Utilities: 'warning',
      Shopping: 'danger',
      Travel: 'secondary',
      Food: 'orange'
    };
    return colors[this.expense.category] || 'light';
  }

  // Check if expense is high (> $500)
  isHighExpense(): boolean {
    return this.expense.amount > 500;
  }

  onDelete(): void {
    this.deleteExpense.emit(this.expense.id);
  }

  onEdit(): void {
    this.router.navigate(['/edit', this.expense.id]);
  }
}
