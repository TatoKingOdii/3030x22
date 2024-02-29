import {createReducer, on} from '@ngrx/store';
import { LocationActions } from './location.actions';
import {Loc} from "../../types/loc";

export const locationFeatureKey = 'location';

export interface LocationState {
  loadingLocations: boolean,
  savingLocation: boolean,
  updatingLocation: boolean,
  deletingLocation: boolean,
  locations: Loc[]
}

export const initialState: LocationState = {
  loadingLocations: false,
  savingLocation: false,
  updatingLocation: false,
  deletingLocation: false,
  locations: []
};

export const locationReducer = createReducer(
  initialState,
  on(LocationActions.loadLocations, state => ({...state, loadingLocations: true})),
  on(LocationActions.loadLocationsSuccess, (state,
                                            {locations}) => ({...state, locations: locations, loadingLocations: false})),
  on(LocationActions.loadLocationsFailure, (state) => ({...state, loadingLocations: false})),

  on(LocationActions.createLocation, state => ({...state, savingLocation: true})),
  on(LocationActions.createLocationsSuccess, state => ({...state, savingLocation: false})),
  on(LocationActions.createLocationsFailure, state => ({...state, savingLocation: false})),

  on(LocationActions.updateLocation, state => ({...state, updatingLocation: true})),
  on(LocationActions.updateLocationsSuccess, state => ({...state, updatingLocation: false})),
  on(LocationActions.updateLocationsFailure, state => ({...state, updatingLocation: false})),

  on(LocationActions.deleteLocation, state => ({...state, deletingLocation: true})),
  on(LocationActions.deleteLocationsSuccess, state => ({...state, deletingLocation: false})),
  on(LocationActions.deleteLocationsFailure, state => ({...state, deletingLocation: false})),
);

