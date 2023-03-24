import { Component, Injectable, OnInit } from '@angular/core';
import { selectFeatureContent } from 'src/app/state/cartoons/cartoon.selectors';
import { stateActions } from 'src/app/state/cartoons/cartoon.actions';
import { Store } from '@ngrx/store';

@Injectable()

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})

export class ListingComponent implements OnInit{
  cartoons$ = this.store.select(selectFeatureContent)

  constructor(private store: Store){}

  ngOnInit(){
    this.store.dispatch(stateActions.loadCartoon())
  }
}
