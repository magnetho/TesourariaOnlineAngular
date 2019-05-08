import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Admin/home/home.component';

const routes: Routes = [
    {
                path: '', 
                pathMatch: 'full', 
                redirectTo: 'login'
    },
    {
        path: 'login', component: LoginComponent
    },
    {path:'home', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }