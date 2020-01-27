import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, effect } from '../actions/counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
  on(effect, (state, {cont}) => {
    console.log(cont);
    return state = cont;
  }),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}