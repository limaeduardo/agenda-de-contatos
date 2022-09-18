import { ErrorUtil } from '../utils/error-util';
import { catchError } from 'rxjs/operators';
import { Contact } from '../model/Contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ContactsObservable {
  URL = 'http://localhost:3000/contatos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.URL}/${id}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  getAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.URL}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  save(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(
      this.URL,
      contact,
      this.httpOptions
    );
  }

  patch(contact: Contact): Observable<Contact> {
    return this.httpClient.patch<Contact>(
      this.URL,
      contact,
      this.httpOptions
    );
  }

  update(contact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(
      this.URL,
      contact,
      this.httpOptions
    );
  }


  delete(id: number): Observable<Contact> {
    return this.httpClient.delete<Contact>(
      `${this.URL}/${id}`
    );
  }
}
