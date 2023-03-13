import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cartoon } from 'src/models/cartoon.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})

export class CreateComponent {
  cartoonUrl = 'https://api.sampleapis.com/cartoons/cartoons2D';
  cartoonForm: FormGroup;

  title = new FormControl('', [Validators.required]);
  year = new FormControl('', [Validators.required]);
  rating = new FormControl('', [Validators.required]);
  runtime_in_minutes = new FormControl('', [Validators.required]);
  episodes = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  creator = new FormControl('', [Validators.required]);
  genre = new FormControl('', [Validators.required]);

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.cartoonForm = this._formBuilder.group({
      title: this.title,
      year: this.year,
      rating: this.rating,
      runtime_in_minutes: this.runtime_in_minutes,
      episodes: this.episodes,
      image: this.image,
      creator: this.creator,
      genre: this.genre,
    });
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  addCartoon(data: Cartoon) {
    this.http.post(this.cartoonUrl, data).subscribe({
      next: () => {
        this.clearForm();
        this.openSnackBar('Added successfully', 'Close');
      },
      error: (error) => {
        console.log(error);
        this.openSnackBar('Added failed', 'Close');
      },
    });
  }

  handleSubmitForm() {
    this.cartoonForm.value.creator = this.splitStringByComma(
      this.cartoonForm.value.creator
    );
    this.cartoonForm.value.genre = this.splitStringByComma(
      this.cartoonForm.value.genre
    );

    this.addCartoon(this.cartoonForm.value);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  private splitStringByComma(string: any): string[] {
    return string.replaceAll(/\s/g, '').split(',');
  }

  private clearForm(): void {
    this.cartoonForm.reset();
  }
}
