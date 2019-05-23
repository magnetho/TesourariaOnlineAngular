import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Status } from './status.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MovimentoService } from './movimento.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Movimento } from './movimento.model';
@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrls: ['./movimento.component.scss']
})
export class MovimentoComponent implements OnInit {
  constructor(private fb: FormBuilder, private movimentoService: MovimentoService) {}

  status: Array<Status> = [];

  pesquisaForm: FormGroup;

  movimentoLista: Movimento[];

  dataSource = new MatTableDataSource<Movimento>();
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.status.push(
      {
        value: "0",
        text: "Fechado"
      },
      {
        value: "1",
        text: "Encerrado"
      });

        this.pesquisaForm = this.fb.group({
          dataAlteracao: this.fb.control(''),
          status: this.fb.control('')
        })
      }

      pesquisar(){
        let dataAlteracao = this.pesquisaForm.value['dataAlteracao'];
        let status = this.pesquisaForm.value['status'];

        this.movimentoService.PesquisarMovimento(dataAlteracao, status)
                              .subscribe(movimento => {
                                this.movimentoLista = movimento;
                                this.dataSource.data = this.movimentoLista
                              });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}
