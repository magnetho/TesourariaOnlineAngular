// import { AppConfig } from '../../app.config';
// import { SessionService } from '../../services/session.service';
// import { Injectable, Provider } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';

// @Injectable({
//     providedIn: 'root'
// })
// export class ApiService {

//     public apiUrl: string;
//     public server: HttpClient;

//     constructor(
//         public appConfig: AppConfig = null,
//         public sessionService: SessionService = null,
//         public http: HttpClient = null
//     ) {
//         this.apiUrl = environment.WS_URL;
//         this.server = this.http;
//     }

//     public getQuery(params: HttpParams) {
//         let lst: string[] = [];
//         for (let key in params) {
//             if (!params.hasOwnProperty(key)) {
//                 continue;
//             }
//             let value = params[key];
//             if (Array.isArray(value)) {
//                 for (let x in value) {
//                     lst.push(encodeURIComponent(key) + '=' + encodeURIComponent(value[x]));
//                 }
//             } else {
//                 lst.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
//             }
//         }
//         if (lst.length === 0) {
//             return '';
//         } else {
//             return '&' + lst.join('&');
//         }
//     }

//     buildUrl(path: string, params: HttpParams = null): string {
//         let language = '';
//         if (path.indexOf('?') > 0) {
//             language = '&CultureCode=' + this.sessionService.locale;
//         } else {
//             language = '?CultureCode=' + this.sessionService.locale;
//         }
//         return this.apiUrl + path + language + this.getQuery(params);
//     }

//     get<T>(path: string, params: HttpParams = null) {
//         return this.server.get<T>(this.buildUrl(path, params));
//     }

//     delete(path: string, params: any = null): Observable<any> {
//         return this.server.delete(this.buildUrl(path, params));
//     }

//     post<T>(path: string, body: any, params: any = null): Observable<any> {
//         return this.server.post<T>(this.buildUrl(path, params), body);
//     }

//     put<T>(path: string, body: any = null, params: any = null): Observable<any> {
//         return this.server.put<T>(this.buildUrl(path, params), body);
//     }
// }

// export const API_SERVICE_PROVIDER: Provider = {
//     provide: ApiService
// };
