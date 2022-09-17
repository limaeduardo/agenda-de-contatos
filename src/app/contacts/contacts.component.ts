import { Router } from '@angular/router';
import { Contact } from './../model/Contact';
import { DataService } from './../service/dataService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactList: Contact[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.contactList = this.dataService.contactList;
  }
  onClickItem(t: Contact){
    console.log(t?.id)
    this.router.navigate(['/contatos/detalhes', t?.id]);
  }
}
