import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {deletingLocations, loadingLocations, locations, savingLocations, updatingLocations} from "./location.selectors";
import {LocationActions} from "./location.actions";
import {Loc} from "../../types/loc";

@Injectable({
  providedIn: 'root'
})
export class LocationFacade {

  locations$ = this.locationStore.select(locations);
  isLoadingLocations$ = this.locationStore.select(loadingLocations);
  isSavingLocation$ = this.locationStore.select(savingLocations);
  isUpdatingLocation$ = this.locationStore.select(updatingLocations);
  isDeletingLocation$ = this.locationStore.select(deletingLocations);

  constructor(private locationStore: Store) { }

  loadLocations() {
    this.locationStore.dispatch(LocationActions.loadLocations());
  }

  createLocation(location: Loc) {
    console.log('Create Loc: ' + JSON.stringify(location));
    this.locationStore.dispatch(LocationActions.createLocation({location: location}));
  }

  updateLocation(location: Loc) {
    console.log('Update Loc: ' + JSON.stringify(location));
    this.locationStore.dispatch(LocationActions.updateLocation({location: location}));
  }

  deleteLocation(location: Loc) {
    console.log('Delete Loc: ' + JSON.stringify(location));
    this.locationStore.dispatch(LocationActions.deleteLocation({location: location}));
  }

}
