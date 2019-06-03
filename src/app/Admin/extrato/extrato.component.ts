import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Status } from 'src/app/models/status.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ExtratoService } from '../../services/extrato.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Extrato } from 'src/app/models/extrato.model';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})

export class ExtratoComponent implements OnInit {
  constructor(private fb: FormBuilder, private extratoService: ExtratoService) {}
  
  ngOnInit() {
  }
}

export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}

export class AppComponent  {
}
