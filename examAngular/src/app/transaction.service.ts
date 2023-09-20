// transaction.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: any[] = [];

  constructor() {}

  addTransaction(transaction: any) {
    this.transactions.push(transaction);
  }

  getTransactions() {
    return this.transactions;
  }
}
