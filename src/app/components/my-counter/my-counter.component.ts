import { Component, OnInit } from '@angular/core';
import { Observable, interval, fromEvent, from, of, timer } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset, effect } from 'src/app/actions/counter.actions';
import { pluck, map, take, mergeMap, switchMap } from 'rxjs/operators';
import { filterCount } from 'src/app/selectors/count-selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {

  count$: Observable<any>;
  constructor(private store: Store<any>) {

    this.store.subscribe(data => console.log(data));
    this.count$ = store.pipe(
      select(filterCount)
    );
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  set(data: any) {
    this.store.dispatch(effect({cont: data.value}));
  }

}
