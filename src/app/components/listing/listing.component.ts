import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartoon } from 'src/models/cartoon.model';

@Injectable()

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})

export class ListingComponent implements OnInit{
  cartoons: Cartoon[] = [];
  cartoonUrl = 'https://api.sampleapis.com/cartoons/cartoons2D';

  constructor(private http: HttpClient){}

  getCartoon$() : Observable<Cartoon[]> {
    return this.http.get<Cartoon[]>(this.cartoonUrl)
  }

  ngOnInit() {
    this.getCartoon$().subscribe({
      next: (cartoon) => {
        this.cartoons = cartoon
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
