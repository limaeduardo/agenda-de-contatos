import { ContactsObservable } from './../service/contacts-observable.service';

import { Router } from '@angular/router';

import { Contact } from './../model/Contact';
import { DataService } from './../service/dataService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsObservable]
})
export class ContactsComponent implements OnInit {
  contactList: Contact[] = [];
  constructor(private dataService: DataService, private router: Router,private contactsObservable: ContactsObservable) { }

   ngOnInit() {
    this.contactsObservable.getAll().subscribe(
                    (data: Contact[]) => {
                      if(!data || data.length ==0){
                        alert('Nenhum resultado encontrado');
                        return;
                      }
                      this.dataService.saveAll(data);
                      this.contactList = data;
                      console.log('passou');
                    },
                    (error) => {
                      console.log(error);
                    }
    );
  }
  onClickItem(t: Contact){
    console.log(t?.id)
    this.router.navigate(['/contatos/detalhes', t?.id]);
  }
  onDelete(id: number){
    this.contactsObservable.delete(id).subscribe(
              () =>{
                this.dataService.delete(id);
                this.router.navigate(['/contatos']);
              },
              (error) => {
                alert(error);
              }
    );

  }
}
