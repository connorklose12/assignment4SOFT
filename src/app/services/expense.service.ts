import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  // State: expenses stored as a signal
  expenses = signal<Expense[]>([]);

  // Categories available for selection
  categories = signal<ExpenseCategory[]>([
    'Work',
    'Personal',
    'Grocery',
    'Utilities',
    'Shopping',
    'Travel',
    'Food'
  ]);

  // Computed signal for total expenses
  totalExpense = computed(() =>
    this.expenses().reduce((sum, expense) => sum + expense.amount, 0)
  );

  // Computed signal for number of transactions
  transactionCount = computed(() => this.expenses().length);

  // Computed signal for highest expense
  highestExpense = computed(() => {
    const expensesList = this.expenses();
    return expensesList.length > 0 ? Math.max(...expensesList.map((e) => e.amount)) : 0;
  });

  // Computed signal for average expense
  averageExpense = computed(() => {
    const total = this.totalExpense();
    const count = this.transactionCount();
    return count > 0 ? total / count : 0;
  });

  constructor() {}

  // Add a new expense
  addExpense(expense: Omit<Expense, 'id'>): void {
    const newExpense: Expense = {
      ...expense,
      id: Date.now().toString()
    };
    this.expenses.update((expenses) => [...expenses, newExpense]);
  }

  // Delete an expense by id
  deleteExpense(id: string): void {
    this.expenses.update((expenses) => expenses.filter((e) => e.id !== id));
  }

  // Get an expense by id
  getExpenseById(id: string): Expense | undefined {
    return this.expenses().find((e) => e.id === id);
  }

  // Update an expense
  updateExpense(id: string, updatedExpense: Omit<Expense, 'id'>): void {
    this.expenses.update((expenses) =>
      expenses.map((e) => (e.id === id ? { ...updatedExpense, id } : e))
    );
  }
}
