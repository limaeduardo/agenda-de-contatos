import { DataService } from './service/dataService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { FormsModule } from '@angular/forms';
import { LandPageComponent } from './land-page/land-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContactRegisterComponent,
    LandPageComponent,
    ContactsComponent,
    ContactsDetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
