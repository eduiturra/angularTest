import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';


interface GoogleGamesAuth {
  loading: boolean;
  success: boolean | null;
  error: string;
}

interface GoogleGamesData {
  userId: number;
  userName: string;
}

export const load = createAction('[Counter Component] Increment');
export const error = createAction('[Counter Component] Decrement',
props<{ err: string }>());
export const success = createAction('[Counter Component] Reset');

export const setData = createAction('[Counter Component] Reset',
props<{ userId: string, userName: string }>());

const initialState: GoogleGamesAuth = {
 loading: false,
 error: null,
 success: null
};

// tslint:disable-next-line: variable-name
const _counterReducer = createReducer(initialState,
  on(load, state => ({...state, loading: true})),
  on(error, (state, { err }) => ({...state, error: err, loading: false, success: false})),
  on(success, state => ({...state, success: true, loading: false})),
);

export function counterReducer(state: GoogleGamesAuth, action) {
  return _counterReducer(state, action);
}
