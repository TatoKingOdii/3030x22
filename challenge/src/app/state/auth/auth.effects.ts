import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {AuthActions} from "./auth.actions";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    exhaustMap(action => this.authService.getUsers().pipe(
      map(users => users.find(user => user.user === action.user.user && user.pass === action.user.pass)),
      map(result =>
        result ? AuthActions.loginSuccess() : AuthActions.loginFailure({error: 'Username / Password not found!'}))
    )),
    catchError((err) => of(
      AuthActions.loginFailure({error: 'Failed to load user details'}
      )))
  ));

  // Maybe need a routing trigger on success to route to home / same for logout
  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginSuccess),
    tap(() => this.router.navigateByUrl('/home'))
  ), {dispatch: false});
}
