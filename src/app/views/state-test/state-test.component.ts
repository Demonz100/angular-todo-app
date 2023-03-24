import { stateActions } from './../../state/cartoons/cartoon.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectFeatureContent } from 'src/app/state/cartoons/cartoon.selectors';

@Component({
  selector: 'app-state-test',
  templateUrl: './state-test.component.html',
  styleUrls: ['./state-test.component.css']
})
export class StateTestComponent implements OnInit{

  cartoons$ = this.store.select(selectFeatureContent)

  constructor(private store: Store){}

  ngOnInit(){
    this.store.dispatch(stateActions.loadCartoon())
  }
}
