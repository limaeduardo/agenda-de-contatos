import { TransactionPromiseService } from '../service/contacts-promisse.service';
import { DataService } from './../service/dataService';
import { Contact } from './../model/Contact';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactRegisterService {
  constructor(private dataService: DataService, private transactionPromiseService: TransactionPromiseService) {}

  save(contact: Contact): Promise<Contact> {
    const p = new Promise<Contact>((resolve, reject) => {
      setTimeout(() => {
        this.transactionPromiseService.save(contact);
        this.dataService.save(contact);
        resolve(contact);
      }, 100);
    });
    return p;
  }
}
