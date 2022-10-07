import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AddressBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule {}
