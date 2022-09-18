import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataService } from './service/dataService';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContactRegisterComponent } from './contact-register/contact-register.component';

import { LandPageComponent } from './land-page/land-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http'


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
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
