import {createFeatureSelector, createSelector} from '@ngrx/store';
import {locationFeatureKey, LocationState} from "./location.reducer";

export const locationFeature = createFeatureSelector<LocationState>(locationFeatureKey);

export const loadingLocations = createSelector(
  locationFeature,
  (state: LocationState) => state.loadingLocations
);

export const savingLocations = createSelector(
  locationFeature,
  (state: LocationState) => state.savingLocation
);

export const updatingLocations = createSelector(
  locationFeature,
  (state: LocationState) => state.updatingLocation
);

export const deletingLocations = createSelector(
  locationFeature,
  (state: LocationState) => state.deletingLocation
);

export const locations = createSelector(
  locationFeature,
  (state: LocationState) => state.locations
);
