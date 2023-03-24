import { stateActions } from './cartoon.actions';
import { Cartoon } from './../../models/cartoon.model';
import { createReducer, on } from '@ngrx/store';

export interface InitialState {
  content: Cartoon[];
  message: string;
}

export const initialState: InitialState = {
  content: [],
  message: '',
};

export const cartoonReducer = createReducer(
  initialState,
  on(stateActions.loadCartoonSuccess, (state, { content }) => ({
    ...state,
    content,
  })),
  on(stateActions.loadCartoonError, (state, { message }) => ({
    ...state,
    message,
  }))
);
