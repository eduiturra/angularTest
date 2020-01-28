import { createAction, props } from '@ngrx/store';

interface GoogleGamesAuth {
  loading: boolean;
  success: boolean;
  error: string;
}

interface GoogleGamesData {
  userId: number;
  userName: string;
}

export const load = createAction('[Counter Component] Increment');
export const error = createAction('[Counter Component] Decrement',
props<{ error: string }>());
export const success = createAction('[Counter Component] Reset');

export const setData = createAction('[Counter Component] Reset',
props<{ userId: string, userName: string }>());
