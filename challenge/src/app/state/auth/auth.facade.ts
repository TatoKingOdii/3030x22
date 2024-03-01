import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {User} from "../../types/user";
import {AuthActions} from "./auth.actions";
import {loggedIn, pendingLogin} from "./auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  userLoggedIn$ = this.authStore.select(loggedIn);
  pendingLogin$ = this.authStore.select(pendingLogin);

  constructor(private authStore: Store) { }

  login(user: User) {
    this.authStore.dispatch(AuthActions.login({user: user}));
  }

  logout() {
    this.authStore.dispatch(AuthActions.logout());
  }

}
