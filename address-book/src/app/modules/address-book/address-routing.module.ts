import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddressBookComponent} from "./pages/address-book/address-book.component";
import {AddressDetailComponent} from "./pages/address-detail/address-detail.component";

const routes: Routes = [
  {
    path: '', component: AddressBookComponent
  },
  {
    path: 'detail/:id', component: AddressDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
