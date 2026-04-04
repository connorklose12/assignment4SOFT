import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  expenseService = inject(ExpenseService);

  // Access computed signals
  totalExpense = this.expenseService.totalExpense;
  transactionCount = this.expenseService.transactionCount;
  highestExpense = this.expenseService.highestExpense;
  averageExpense = this.expenseService.averageExpense;
}
