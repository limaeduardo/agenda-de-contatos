import { Router } from '@angular/router';
import { ModalComponent } from './../modal/modal.component';
import { DataService } from './../service/dataService';
import { ContactRegisterService } from './contact-register.service';
import { Contact } from './../model/Contact';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css'],
  providers: [ContactRegisterService]
})
export class ContactRegisterComponent implements OnInit {
  contact =   new Contact(0,'','');

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private dataService: DataService, private router: Router,private contactRegisterService: ContactRegisterService) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.contactRegisterService
      .save(this.contact)
      .then(() => {
        this.modal.show = true;
        this.modal.title = 'Cadastro';
        this.modal.text = `O contato ` + this.contact.name + ` foi cadastrado com sucesso` ;
      })
      .catch((e)=>{
        this.modal.show = true;
        this.modal.title = 'Cadastro';
        this.modal.text = `Ocorreu um erro ao realizar o cadastro!` ;
      })
      .finally(() =>{
        console.log('Operação realizada!')
      });
     // this.dataService.save({id:0,name:this.contact.name,phone:this.contact.phone})
    this.modal.show = true;
    this.modal.title = 'Cadastro';
    this.modal.text = `O contato ` + this.contact.name + ` foi cadastrado com sucesso` ;

  }

  onCloseModal() {
    this.modal.show = false;
    this.router.navigate(['']);
  }
}
