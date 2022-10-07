import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { AddressRoutingModule } from './address-routing.module';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddressBookComponent,
    ContactDetailComponent,
    ContactCardComponent,
  ],
  imports: [CommonModule, AddressRoutingModule, ReactiveFormsModule],
})
export class AddressBookModule {}
