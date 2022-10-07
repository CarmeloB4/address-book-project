import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { AddressDetailComponent } from './pages/address-detail/address-detail.component';
import {AddressRoutingModule} from "./address-routing.module";
import { ContactCardComponent } from './components/contact-card/contact-card.component';



@NgModule({
  declarations: [
    AddressBookComponent,
    AddressDetailComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule
  ]
})
export class AddressBookModule { }
