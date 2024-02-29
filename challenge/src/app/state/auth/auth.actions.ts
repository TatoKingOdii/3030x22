import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {User} from "../../types/user";

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login': props<{user: User}>(),
    'Login Success': emptyProps,
    'Login Failure': props<{ error: string }>(),

    'Logout': emptyProps,
    'Logout Success': emptyProps,
    'Logout Failure': props<{ error: string }>(),
  }
});
