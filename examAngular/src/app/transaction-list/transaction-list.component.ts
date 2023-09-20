// transaction-list.component.ts
import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {
    this.transactions = this.transactionService.getTransactions();
  }

  calculateBalance(): number {
    const entries = this.transactions.filter(transaction => transaction.category === 'entrée');
    const expenses = this.transactions.filter(transaction => transaction.category === 'dépense');

    const entrySum = entries.reduce((acc, transaction) => acc + transaction.amount, 0);
    const expenseSum = expenses.reduce((acc, transaction) => acc + transaction.amount, 0);

    return entrySum - expenseSum;
  }
}
