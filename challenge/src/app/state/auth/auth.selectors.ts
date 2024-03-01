import {createFeatureSelector, createSelector} from '@ngrx/store';
import {authFeatureKey, AuthState} from "./auth.reducer";

export const authFeature = createFeatureSelector<AuthState>(authFeatureKey);

export const loggedIn = createSelector(
  authFeature,
  (state: AuthState) => state.loggedIn
);

export const pendingLogin = createSelector(
  authFeature,
  (state: AuthState) => state.pendingLogin
);


