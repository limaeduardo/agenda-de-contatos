import { DataService } from './../service/dataService';
import { Contact } from './../model/Contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
  contact!: Contact;

  constructor(private activeRoute: ActivatedRoute,private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    let idParam = this.activeRoute.snapshot.params['id'];
    console.log(idParam);
    let contacts = this.dataService.contactList.filter((c) =>{
      return c.id == idParam;
    });

    if(this.dataService.contactList.length == 0){
      this.router.navigate(['/contatos']);
    }

    if(contacts.length == 0){
      this.router.navigate(['/contatos']);
    }
    this.contact = contacts[0];
  }
}
