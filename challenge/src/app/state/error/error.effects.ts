import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthActions} from "../auth/auth.actions";
import {LocationActions} from "../location/location.actions";
import {map, tap} from "rxjs";
import {ToastController} from "@ionic/angular/standalone";
import {ToastUiService} from "../../core/toast-ui-service/toast-ui.service";


@Injectable()
export class ErrorEffects {

  constructor(private actions$: Actions, private toastUiService: ToastUiService) {}

  errorEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginFailure, AuthActions.logoutFailure, LocationActions.createLocationsFailure,
      LocationActions.deleteLocationsFailure, LocationActions.updateLocationsFailure, LocationActions.loadLocationsFailure),
    map(action => this.toastUiService.presentToast(action.error))
  ), {dispatch: false});
}
