import { InitialState } from './cartoon.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cartoon } from './../../models/cartoon.model';

export interface FeatureState{
  content: Cartoon[],
  message: string
}
export const selectFeature = createFeatureSelector<FeatureState>('cartoon')

export const selectFeatureContent = createSelector(
  selectFeature,
  (state: FeatureState) => state.content
)
