import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { DocumentosService } from './servicios/documentos.service';
// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { HomeComponent } from './components/home/home.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslationComponent } from './translation/translation.component';
import { LoadingComponent } from './components/loading/loading.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    CertificadosComponent,
    HomeComponent,
    TrabajosComponent,
    TranslationComponent,
    LoadingComponent,
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [ HttpClient ]
      }
    })
    
  ],
  providers: [
    DocumentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
