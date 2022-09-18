import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Contact } from './../model/Contact';


@Injectable({
  providedIn: 'root',
})
export class TransactionPromiseService {
  URL = 'http://localhost:3000/contatos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Promise<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.URL}/${id}`).toPromise();
  }

  getAll(): Promise<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.URL}`).toPromise();
  }

  save(contact: Contact): Promise<Contact> {
    return this.httpClient
      .post<Contact>(this.URL, JSON.stringify(contact), this.httpOptions)
      .toPromise();
  }

  patch(contact: Contact): Promise<Contact> {
    return this.httpClient
      .patch<Contact>(
        `${this.URL}/${contact.id}`,
        JSON.stringify(contact),
        this.httpOptions
      )
      .toPromise();
  }

}
