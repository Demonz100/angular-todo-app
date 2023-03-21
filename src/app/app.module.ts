import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './views/listing/listing.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateComponent } from './views/create/create.component';
import { CardComponent } from './components/card/card.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { EditComponent } from './views/edit/edit.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckMinPipe } from './pipes/check-min.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListingComponent,
    SideNavbarComponent,
    NotFoundComponent,
    CreateComponent,
    CardComponent,
    EditComponent,
    EditDialogComponent,
    CheckMinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
