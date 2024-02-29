import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  loggedIn: boolean,
  pendingLogin: boolean
}

export const initialState: AuthState = {
  loggedIn: false,
  pendingLogin: false
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, state => ({...state, loggedIn: true, pendingLogin: false})),
  on(AuthActions.loginFailure, state => ({...state, loggedIn: false, pendingLogin: false})),
  on(AuthActions.login, state => ({...state, pendingLogin: true})),

  on(AuthActions.logoutSuccess, state => ({...state, loggedIn: false, pendingLogin: false})),
  on(AuthActions.logoutFailure, state => ({...state, loggedIn: false, pendingLogin: false})),
  on(AuthActions.logout, state => ({...state, loggedIn: false, pendingLogin: false})),
);

