import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Status } from 'src/app/models/status.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { PerfilService } from 'src/app/services/perfil.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Perfil } from 'src/app/models/perfil.model';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})

export class PerfilComponent implements OnInit {
  constructor(private fb: FormBuilder, private extratoService: PerfilService) {}
  
  ngOnInit() {
  }

  public submit(){
    window.alert('Enviado');
  }

  public cancel(){
    window.alert('Cancelado');
  }
}

export class AppComponent  {}
