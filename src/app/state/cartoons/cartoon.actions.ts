import { Cartoon } from './../../models/cartoon.model';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const stateActions = createActionGroup({
  source: 'State-Test',
  events: {
    'Create Cartoon': props<{ content: Cartoon }>(),
    'Load Cartoon': emptyProps(),
    'Load Cartoon Success': props<{ content: Cartoon[] }>(),
    'Load Cartoon Error': props<{ message: string }>()
  }
})
