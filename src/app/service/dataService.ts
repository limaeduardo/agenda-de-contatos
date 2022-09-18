import { WebStorageUtil } from './../utils/web-storage-util';
import { Constants } from '../utils/constants';
import { Contact } from './../model/Contact';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService{
  contactList!: Contact[];
  id!: number;
  constructor(){
    this.contactList = WebStorageUtil.get(Constants.CONTACTS_KEY);
    if(this.contactList == null){
      this.contactList = [];
      WebStorageUtil.set(Constants.CONTACTS_KEY,this.contactList);
    }
  }

  save(c: Contact){
    this.contactList = WebStorageUtil.get(Constants.CONTACTS_KEY);
    c.id = this.getId();
    this.contactList.push(c);
    WebStorageUtil.set(Constants.CONTACTS_KEY,this.contactList);
  }

  update(c:  Contact){
    this.contactList = WebStorageUtil.get(Constants.CONTACTS_KEY);
    this.delete(c.id);
    this.save(c);
  }

  delete(id: number): boolean{
    this.contactList = WebStorageUtil.get(Constants.CONTACTS_KEY);
    this.contactList = this.contactList.filter((c) =>{
      return c.id?.valueOf() != id?.valueOf();
    });
    WebStorageUtil.set(Constants.CONTACTS_KEY,this.contactList);
    return true;
  }

  getId(): number{
    if(this.contactList == null || this.contactList.length == 0){
      return 1;
    } else {
      let a = this.contactList[this.contactList.length-1].id;
      return this.contactList[this.contactList.length-1].id + 1;
    }
  }

  all():Contact[]{
    return WebStorageUtil.get(Constants.CONTACTS_KEY);
  }

  saveAll(c: Contact[]){
    WebStorageUtil.set(Constants.CONTACTS_KEY,c);
    this.contactList = c;
  }
}
