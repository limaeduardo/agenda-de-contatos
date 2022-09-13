import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloMundoComponent } from './alo-mundo/alo-mundo.component';
import { ComponenteTesteComponent } from './componente-teste/componente-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    AloMundoComponent,
    ComponenteTesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
