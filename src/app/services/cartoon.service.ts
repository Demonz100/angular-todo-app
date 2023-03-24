import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartoon } from 'src/app/models/cartoon.model';

@Injectable({
  providedIn: 'root'
})

export class CartoonService {

  constructor(private http: HttpClient) {}

  cartoonUrl = 'https://api.sampleapis.com/cartoons/cartoons2D';

  getCartoon$() : Observable<Cartoon[]> {
    return this.http.get<Cartoon[]>(this.cartoonUrl)
  }

  addCartoon$(data: Cartoon) : Observable<Cartoon> {
    return this.http.post<Cartoon>(this.cartoonUrl, data)
  }

  deleteCartoon$(id: number) : Observable<Cartoon> {
    const deleteUrl = `${this.cartoonUrl}/${id}`
    return this.http.delete<Cartoon>(deleteUrl)
  }

  editCartoon$(data: Cartoon) : Observable<Cartoon> {
    const deleteUrl = `${this.cartoonUrl}/${data.id}`
    return this.http.put<Cartoon>(deleteUrl, data)
  }
}