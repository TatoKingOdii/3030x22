import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import {INJECTABLES, routes} from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {AuthEffects} from "./state/auth/auth.effects";
import {LocationEffects} from "./state/location/location.effects";
import {LocationResolver} from "./resolvers/location-resolver/location.resolver";
import {locationReducer} from "./state/location/location.reducer";
import {authReducer} from "./state/auth/auth.reducer";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {ErrorEffects} from "./state/error/error.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIonicAngular({}),
    provideEffects(AuthEffects, LocationEffects, ErrorEffects),
    provideStore({location: locationReducer, auth: authReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch()),
    ...INJECTABLES
  ]
};
