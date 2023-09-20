// transaction-form.component.ts
import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  transactionAmount: number = 0;
  transactionCategory: string = 'depense';

  constructor(private transactionService: TransactionService) {}

  addTransaction() {
    if (this.transactionAmount && this.transactionCategory) {
      this.transactionService.addTransaction({
        amount: this.transactionAmount,
        category: this.transactionCategory,
        date: new Date()
      });


      this.transactionAmount = 0;
      this.transactionCategory = '';
    }
  }
}
