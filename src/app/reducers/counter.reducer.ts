import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, effect } from '../actions/counter.actions';


interface State {
  idCounter: number;
  counter: number;
}

const initialState: State = {
   idCounter: 1,
   counter: 1
};

// tslint:disable-next-line: variable-name
const _counterReducer = createReducer(initialState,
  on(increment, state => ({...state, counter: state.counter + 1})),
  on(decrement, state => ({...state, counter: state.counter - 1})),
  on(reset, state => ({...state, counter: 0})),
  on(effect, (state, {cont}) => {
    return ({...state, counter: state.counter = cont});
  }),
);

export function counterReducer(state: State, action) {
  return _counterReducer(state, action);
}
