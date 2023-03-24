import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './views/listing/listing.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateComponent } from './views/create/create.component';
import { CardComponent } from './components/card/card.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { EditComponent } from './views/edit/edit.component';
import { StateTestComponent } from './views/state-test/state-test.component';
// Angular Materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckMinPipe } from './pipes/check-min.pipe';
// NGRX States
import { cartoonReducer } from './state/cartoons/cartoon.reducers';
import { CartoonsEffects } from './state/cartoons/cartoon.effects';
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
    CheckMinPipe,
    StateTestComponent,
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
    MatDialogModule,
    EffectsModule.forRoot(CartoonsEffects),
    StoreModule.forRoot({ cartoon: cartoonReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
