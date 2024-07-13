import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('../app/index/index.component').then(m => m.IndexComponent),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('../app/login/login.component').then(m => m.LoginComponent)
    }
];
