import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public language = navigator.language;

  constructor(private translate: TranslateService) {
    if (window.localStorage.languageCache != null || window.localStorage.languageCache != undefined){
      this.language = window.localStorage.getItem('languageCache');
    }
    if (this.language != null ){
      if (this.language == 'en'        
        ||this.language == 'eng'
        ||this.language == 'en-us'
        ||this.language == 'en-uk'
        ||this.language == 'EN'
        ||this.language == 'ENG'
        ||this.language == 'en-US'
        ||this.language == 'en-UK')
      {
        translate.setDefaultLang('en');
      } else {
        if (this.language == 'pt'
          ||this.language == 'PT'
          ||this.language == 'pt-br'
          ||this.language == 'pt-BR')
        {
          translate.setDefaultLang('pt');
        } else {
          if (this.language == 'es'
            ||this.language == 'es-es'
            ||this.language == 'es-ar'
            ||this.language == 'es-pe'
            ||this.language == 'es-ec'
            ||this.language == 'es-cl'
            ||this.language == 'es-uy'
            ||this.language == 'es-py'
            ||this.language == 'es-bo'
            ||this.language == 'ES'
            ||this.language == 'es-ES'
            ||this.language == 'es-AR'
            ||this.language == 'es-PE'
            ||this.language == 'es-EC'
            ||this.language == 'es-CL'
            ||this.language == 'es-UY'
            ||this.language == 'es-PY'
            ||this.language == 'es-BO')
          {
            translate.setDefaultLang('es');
          } else {
            translate.setDefaultLang('pt');
          }
        }
      }
    } else {
      translate.setDefaultLang('pt');
    }
  }  
    
  public switchLanguage(language: string) {
    this.translate.use(language);
    window.localStorage.setItem('languageCache', language); 
  }

  ngOnInit() {
  }

}