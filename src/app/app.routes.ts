import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddExpenseComponent },
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'edit/:id', component: EditExpenseComponent }
];
