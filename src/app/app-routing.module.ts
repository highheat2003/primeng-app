import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HelloworldComponent} from './demo/helloworld/helloworld.component';
import {BookDataComponent} from './demo/book-data/book-data.component';
import {BookDataRowComponent} from './demo/book-data-row/book-data-row.component';
import {Pattern01Component} from './ui-pattern/pattern01/pattern01.component';
import {Pattern02Component} from './ui-pattern/pattern02/pattern02.component';
import {Pattern03Component} from './ui-pattern/pattern03/pattern03.component';
import {Pattern04Component} from './ui-pattern/pattern04/pattern04.component';
import {Pattern05Component} from './ui-pattern/pattern05/pattern05.component';


const routes: Routes = [
  { path: 'helloworld', component: HelloworldComponent },
  { path: 'books', component: BookDataComponent },
  { path: 'books-row', component: BookDataRowComponent },
  { path: 'pattern01', component: Pattern01Component },
  { path: 'pattern02', component: Pattern02Component },
  { path: 'pattern03', component: Pattern03Component },
  { path: 'pattern04', component: Pattern04Component },
  { path: 'pattern05', component: Pattern05Component },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
