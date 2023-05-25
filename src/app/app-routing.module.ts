import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistiComponent } from './artisti/artisti.component';
import { BraniComponent } from './brani/brani.component';
import { HomeComponent } from './home/home.component';

/* const routes: Routes = []; */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'artisti', component:ArtistiComponent }, 
  { path: 'brani', component:BraniComponent }, 
  { path: 'home', component:HomeComponent }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
