import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Cartoon } from 'src/app/models/cartoon.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})

export class EditDialogComponent {

  title = new FormControl(this.data.title, [Validators.required]);
  year = new FormControl('', [Validators.required]);
  rating = new FormControl('', [Validators.required]);
  runtime_in_minutes = new FormControl('', [Validators.required]);
  episodes = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  creator = new FormControl('', [Validators.required]);
  genre = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cartoon
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
