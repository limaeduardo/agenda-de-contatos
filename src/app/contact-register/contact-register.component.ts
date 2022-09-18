import { ModalComponent } from './../modal/modal.component';
import { DataService } from './../service/dataService';
import { Contact } from './../model/Contact';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {
  contact =   new Contact();

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dataService.save({id:0,name:this.contact.name,phone:this.contact.phone})
    this.modal.show = true;
    this.modal.title = 'Cadastro';
    this.modal.text = `O contato ` + this.contact.name + ` foi cadastrado com sucesso` ;

  }

  onCloseModal() {
    this.modal.show = false;
    this.router.navigate(['']);
  }
}
