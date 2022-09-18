import { TransactionPromiseService } from './../service/transaction-promisse.service';
import { DataService } from './../service/dataService';
import { Contact } from './../model/Contact';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {
  constructor(private dataService: DataService, private transactionPromiseService: TransactionPromiseService) {}

  getAll(): Promise<Contact[]> {
    const p = new Promise<Contact[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.transactionPromiseService.getAll());
      }, 0);
    });
    return p;
  }
}
