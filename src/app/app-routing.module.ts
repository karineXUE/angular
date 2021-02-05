import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuAideComponent } from './component/menu-aide/menu-aide.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuAideComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({

  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
