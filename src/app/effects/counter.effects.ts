import { ofType, createEffect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { EMPTY, from, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { reset, effect} from '../actions/counter.actions';

@Injectable()
export class CounterEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(reset),
    tap(() => console.log('effect')),
    mergeMap(() => of(effect({cont: 10})))
    )
  );
 
  constructor(
    private actions$: Actions
  ) {}
}