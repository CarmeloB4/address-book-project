import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'',
  loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./modules/address-book/address-book.module').then((m) => m.AddressBookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
