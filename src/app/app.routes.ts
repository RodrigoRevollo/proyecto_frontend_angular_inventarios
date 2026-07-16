import { Routes } from '@angular/router';
import { WebLayout } from './layout/web-layout/web-layout';
import { Inicio } from './web/inicio/inicio';
import { Nosotros } from './web/nosotros/nosotros';
import { Servicios } from './web/servicios/servicios';
import { AppLayout } from './layout/app-layout/app-layout';
import { Dashboard } from './admin/dashboard/dashboard';
import { Perfil } from './admin/perfil/perfil';

export const routes: Routes = [
    {
        path: '',
        component: WebLayout,
        children:[
            { path:'', component: Inicio},
            { path:'nosotros', component: Nosotros},
            { path:'servicios', component: Servicios},
            { path: 'auth', loadChildren: () => import('./auth/auth-routing-module').then(m => m.AuthRoutingModule)}
        ]
    },
    
    {
        path: 'admin',
        component: AppLayout,
        children: [
            { path:'', component: Dashboard },
            { path:'perfil', component: Perfil }
        ]
    }
];
