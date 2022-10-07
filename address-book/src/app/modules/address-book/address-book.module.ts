import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { AddressRoutingModule } from './address-routing.module';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { SharedModule } from '../../shared/modules/shared.module';

@NgModule({
  declarations: [
    AddressBookComponent,
    ContactDetailComponent,
    ContactCardComponent,
  ],
  imports: [CommonModule, AddressRoutingModule, SharedModule],
})
export class AddressBookModule {}
