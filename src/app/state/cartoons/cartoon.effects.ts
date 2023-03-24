import { stateActions } from './cartoon.actions';
import { CartoonService } from './../../services/cartoon.service';
import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class CartoonsEffects {
  loadCartoons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stateActions.loadCartoon),
      exhaustMap(() => this.cartoonService.getCartoon$()
        .pipe(
          map((cartoons) => stateActions.loadCartoonSuccess({content: cartoons})),
          catchError(() => of(stateActions.loadCartoonError({ message: 'Load Cartoon Error' })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private cartoonService: CartoonService
  ) {}
}
