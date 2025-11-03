import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Principal } from './pages/principal/principal';

export const routes: Routes = [
 {
    path:'',
    component:LoginComponent,
    title:'pagina de login'
 },
 {
    path:'pages/home',
    component:HomeComponent,
    title:'pagina inicial'
 },
 {
    path:'pages/principal',
    component:Principal,
    title:'pagina principal'
 }
];
