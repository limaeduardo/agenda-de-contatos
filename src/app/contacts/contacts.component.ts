import { ContactsService } from './contacts.service';
import { Router } from '@angular/router';

import { Contact } from './../model/Contact';
import { DataService } from './../service/dataService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
  contactList: Contact[] = [];
  constructor(private dataService: DataService, private router: Router,private contactsService: ContactsService) { }

  async ngOnInit() {
    //this.contactList =this.dataService.all();
    await this.contactsService.getAll()
                          .then((value) =>{
                            this.dataService.saveAll(value);
                            this.contactList = value;
                          })
                          .catch((e) => {
                            this.contactList = this.dataService.all();
                          });
  }
  onClickItem(t: Contact){
    console.log(t?.id)
    this.router.navigate(['/contatos/detalhes', t?.id]);
  }
  onDelete(id: number){
    this.dataService.delete(id);
    this.router.navigate(['/contatos']);
  }
}
