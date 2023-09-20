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
    // Initialisez la liste des transactions en utilisant le service
    this.transactions = this.transactionService.getTransactions();
  }

  calculateBalance(): number {
    // Calculez le solde en additionnant les entrées et en soustrayant les dépenses
    const entries = this.transactions.filter(transaction => transaction.category === 'entrée');
    const expenses = this.transactions.filter(transaction => transaction.category === 'dépense');

    const entrySum = entries.reduce((acc, transaction) => acc + transaction.amount, 0);
    const expenseSum = expenses.reduce((acc, transaction) => acc + transaction.amount, 0);

    return entrySum - expenseSum;
  }
}
