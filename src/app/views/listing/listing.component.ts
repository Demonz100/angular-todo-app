import { Component, Injectable, OnInit } from '@angular/core';
import { CartoonService } from 'src/app/services/cartoon.service';
import { Cartoon } from 'src/app/models/cartoon.model';

@Injectable()

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})

export class ListingComponent implements OnInit{
  cartoons: Cartoon[] = [];

  constructor(private cartoonService: CartoonService){}

  ngOnInit() {
    this.cartoonService.getCartoon$().subscribe({
      next: (cartoon) => {
        this.cartoons = cartoon
      },
      error: (error) => {
        console.log(error.message)
      }
    })
  }
}
