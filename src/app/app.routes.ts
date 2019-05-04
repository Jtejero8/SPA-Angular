import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'certificados', component: CertificadosComponent },
    { path: 'about', component: AboutComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'trabajos', component: TrabajosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });


