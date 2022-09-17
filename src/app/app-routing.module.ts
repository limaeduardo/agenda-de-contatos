import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { LandPageComponent } from './land-page/land-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:LandPageComponent},
  { path: 'cadastro', component:ContactRegisterComponent},
  {
    path: 'contatos',
    component:ContactsComponent,
  },
  { path: 'contatos/detalhes/:id',component:ContactsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
