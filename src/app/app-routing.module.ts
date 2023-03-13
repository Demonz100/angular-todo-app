import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListingComponent } from './components/listing/listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/listing', pathMatch: 'full'
  },
  {
    path:'listing', component: ListingComponent
  },
  {
    path:'create', component: CreateComponent
  },
  {
    path: '**', component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
