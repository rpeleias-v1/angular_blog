import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, LoginComponent, AddPostComponent } from './component';

const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Addpost', component: AddPostComponent }
];

export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);