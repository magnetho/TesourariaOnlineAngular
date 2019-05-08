import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AdminGuard } from './admin.guard';
import { HomeComponent } from './admin/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MovimentoComponent } from './admin/movimento/movimento.component';

const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'login'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path:'admin', 
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
                canActivate: [AdminGuard]
            },
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [AdminGuard]
            },
            {
                path: 'movimento',
                component: MovimentoComponent,
                canActivate: [AdminGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }