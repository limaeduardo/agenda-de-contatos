import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {
  name: string = '';
  telephone: string = '';
  mensage: string = '';
  constructor() {

  }

  ngOnInit(): void {
    this.name = "";
    this.telephone = "";
  }

  onButtonClick(){
    alert(`Evento de click`);
  }

  onSubmit(){
    this.mensage = 'apertou submit!!!';
  }
}
