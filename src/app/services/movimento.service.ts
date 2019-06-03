import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movimento } from 'src/app/models/movimento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  constructor(private http: HttpClient) { }

  PesquisarMovimento(dataAlteracao: string, status: string) : Observable<[Movimento]>{
    const params = new HttpParams({
      fromObject:{
        "dataAlteracao": dataAlteracao,
        "status": status
      }
    });
    return this.http.get<[Movimento]>(environment.apiServer + "GetMovimentoListComFiltro", {params})
  }
}
