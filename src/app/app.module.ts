import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu'; 

import { MessagesComponent } from './component/messages/messages.component';
import { MenuAideComponent } from './component/menu-aide/menu-aide.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SousTypeAideComponent } from './component/sous-type-aide/sous-type-aide.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MenuAideComponent,
    PageNotFoundComponent,
    SousTypeAideComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatMenuModule
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
