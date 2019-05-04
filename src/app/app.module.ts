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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    CertificadosComponent,
    HomeComponent,
    TrabajosComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    DocumentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
