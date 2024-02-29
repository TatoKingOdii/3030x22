import { Routes } from '@angular/router';
import {LandingComponent} from "./views/landing/landing.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {InactiveComponent} from "./views/inactive/inactive.component";
import {UnauthorizedComponent} from "./views/unauthorized/unauthorized.component";
import {HomeComponent} from "./views/home/home.component";
import {LocationComponent} from "./views/location/location.component";
import {SettingsComponent} from "./views/settings/settings.component";
import {AuthGuard, authGuard} from "./guards/auth-guard/auth.guard";

export const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'location', component: LocationComponent, canActivate: [authGuard]},
  {path: 'location/:id', component: LocationComponent, canActivate: [authGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'inactive', component: InactiveComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: '', component: LandingComponent}, // Add redirect to home if logged in
  {path: '**', component: PageNotFoundComponent}
];

export const INJECTABLES = [AuthGuard] as const;
