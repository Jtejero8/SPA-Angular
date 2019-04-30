import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { FooterComponent } from './components/footer/footer.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'documentos', component: DocumentosComponent },
    { path: 'about', component: AboutComponent },
    { path: 'footer', component: FooterComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });


