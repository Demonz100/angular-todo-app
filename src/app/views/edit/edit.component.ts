import { CartoonService } from 'src/app/services/cartoon.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartoon } from 'src/app/models/cartoon.model';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/components/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  dataSource = new CartoonDataSource(this.cartoonService);
  displayedColumns = [
    'title',
    'year',
    'creator',
    'rating',
    'episode',
    'runtime_in_minutes',
    'genre',
    'operation',
  ];

  constructor(
    private cartoonService: CartoonService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  edit(element: Cartoon) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        title: element.title,
        year: element.year,
        creator: element.creator,
        rating: element.rating,
        episodes: element.episodes,
        runtime_in_minutes: element.runtime_in_minutes,
        genre: element.genre,
        image: element.image,
        id: element.id,
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        this.cartoonService.editCartoon$(result).subscribe({
          next: () => {
            this.openSnackBar('Edit successfully', 'Close');
          },
          error: (error) => {
            console.log(error.message);
            this.openSnackBar('Edit failed', 'Close');
          },
        });
      },
      error: (error) => {
        console.log(error.message);
        this.openSnackBar('Delete failed', 'Close');
      }
    });
  }

  delete(id: any) {
    this.cartoonService.deleteCartoon$(id).subscribe({
      next: () => {
        this.openSnackBar('Deleted successfully', 'Close');
      },
      error: (error) => {
        console.log(error.message);
        this.openSnackBar('Delete failed', 'Close');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

export class CartoonDataSource extends DataSource<Cartoon> {
  constructor(private cartoonService: CartoonService) {
    super();
  }

  connect(): Observable<Cartoon[]> {
    return this.cartoonService.getCartoon$();
  }

  disconnect() {}
}
