import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contagem } from 'src/app/models/contagem.model';

@Injectable()
export class ContagemService{

    constructor( private http:HttpClient){

    }


    contagemById(id: string):Observable<Contagem>
    {        
     return  this.http.get<Contagem>(`${environment.apiServer}contagemResumo\\${id}`);
    }

    putContagem(id: number, contagem: Contagem):Observable<Contagem>{

        return this.http.put<Contagem>(`${environment.apiServer}contagemResumo\\${id}`,contagem);  

    }



}