import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Admin/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin.guard';

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
        path:'home', 
        component: HomeComponent,
        canActivate: [AdminGuard]
    },
    {
        path:'admin', 
        component: AdminComponent,
        canActivate: [AdminGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }