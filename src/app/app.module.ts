import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { MovimentoComponent } from './admin/movimento/movimento.component';
import { HomeComponent } from './admin/home/home.component';
import { RouterModule } from '@angular/router';
import { ContagemComponent } from './admin/contagem/contagem.component';
import { ContagemService } from './admin/contagem/contagem.service';
import {TextMaskModule} from 'angular2-text-mask'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    MovimentoComponent,
    ContagemComponent,   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    TextMaskModule
  ],
  providers: [ContagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
