import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {Loc} from "../../types/loc";

export const LocationActions = createActionGroup({
  source: 'Location',
  events: {
    'Load Locations': emptyProps(),
    'Load Locations Success': props<{locations: Loc[]}>(),
    'Load Locations Failure': props<{error: string}>(),

    'Create Location': props<{location: Loc}>(),
    'Create Locations Success': emptyProps(),
    'Create Locations Failure': props<{error: string}>(),

    'Update Location': props<{location: Loc}>(),
    'Update Locations Success': emptyProps(),
    'Update Locations Failure': props<{error: string}>(),

    'Delete Location': props<{location: Loc}>(),
    'Delete Locations Success': emptyProps(),
    'Delete Locations Failure': props<{error: string}>(),
  }
});
