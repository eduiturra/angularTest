import { createSelector, State } from '@ngrx/store';

export const filterCount = createSelector(
  // tslint:disable-next-line: no-string-literal
  state => state['count'],
  (count) => count.counter
);
