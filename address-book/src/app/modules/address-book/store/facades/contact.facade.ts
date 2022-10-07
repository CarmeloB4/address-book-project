import { Injectable } from '@angular/core';
import { AppState } from '../../../../shared/store/store.interface';
import { Store } from '@ngrx/store';
import { selectContact } from '../selectors/contacts.selectors';
import {
  addContact,
  deleteContact,
  getAllContacts,
  updateContact,
} from '../actions/contact.action';
import { Contact } from '../../../../shared/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactFacade {
  public contacts$ = () => this.store.select(selectContact);

  constructor(private readonly store: Store<AppState>) {}

  public getAllContacts(): void {
    this.store.dispatch(getAllContacts());
  }

  public updateContact(contact: Contact): void {
    this.store.dispatch(updateContact({ contact }));
  }

  public addContact(contact: Contact): void {
    this.store.dispatch(addContact({ contact }));
  }

  public deleteContact(id: number): void {
    this.store.dispatch(deleteContact({ id }));
  }
}
