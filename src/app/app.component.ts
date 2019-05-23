import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TesourariaOnlineAngular';
  public language = navigator.language;
  constructor(private translate: TranslateService) {
    if (this.language != 'en' 
      && this.language != 'pt' 
      && this.language != 'es'
      && this.language != 'en-US'
      && this.language != 'pt-BR'
      && this.language != 'es-ES'){
      translate.setDefaultLang('en-US');
    } else {
      translate.setDefaultLang(this.language);
    }
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
  }  
}

  
