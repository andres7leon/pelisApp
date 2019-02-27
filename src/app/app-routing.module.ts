import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detalle/:id', component: DetalleComponent},
  { path: 'search/:movie', component: SearchComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
