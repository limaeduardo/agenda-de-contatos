import { Contact } from './../model/Contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  contactList: Contact[] = [];
  constructor() {
    this.contactList = [];
  }

  ngOnInit(): void {
    this.contactList.push({id:1,name:"teste",phone:"2222"});
  }

}
