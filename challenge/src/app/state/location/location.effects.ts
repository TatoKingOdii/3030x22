import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LocationActions} from "./location.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {LocationService} from "./location.service";
import {v4} from "uuid";

@Injectable()
export class LocationEffects {

  constructor(private actions$: Actions, private locationService: LocationService) {}

  loadLocations$ = createEffect(() => this.actions$.pipe(
    ofType(LocationActions.loadLocations),
    exhaustMap(action => this.locationService.loadContent().pipe(
      map(result => LocationActions.loadLocationsSuccess({locations: result}))
    )),
    catchError(err => of(LocationActions.loadLocationsFailure({error: 'Failed to load latest location data'})))
  ));

  createLocations$ = createEffect(() => this.actions$.pipe(
    ofType(LocationActions.createLocation),
    exhaustMap(action => this.locationService.createContent(action.location).pipe(
      map(result => LocationActions.createLocationsSuccess())
    )),
    catchError(err => of(LocationActions.createLocationsFailure({error: 'Failed to create location'})))
  ));

  updateLocations$ = createEffect(() => this.actions$.pipe(
    ofType(LocationActions.updateLocation),
    exhaustMap(action => this.locationService.updateContent(action.location).pipe(
      map(result => LocationActions.updateLocationsSuccess())
    )),
    catchError(err => of(LocationActions.updateLocationsFailure({error: 'Failed to update location'})))
  ));

  deleteLocations$ = createEffect(() => this.actions$.pipe(
    ofType(LocationActions.deleteLocation),
    exhaustMap(action => this.locationService.deleteContent(action.location).pipe(
      map(result => LocationActions.deleteLocationsSuccess())
    )),
    catchError(err => of(LocationActions.deleteLocationsFailure({error: 'Failed to delete location'})))
  ));

  refreshOnChange$ = createEffect(() => this.actions$.pipe(
    ofType(LocationActions.createLocationsSuccess, LocationActions.updateLocationsSuccess, LocationActions.deleteLocationsSuccess),
    map(action => LocationActions.loadLocations())
  ));
}
