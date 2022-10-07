import { Injectable } from '@angular/core';
import { AppState } from '../../../../shared/store/store.interface';
import { Store } from '@ngrx/store';
import { selectContact } from '../selectors/contacts.selectors';
import { getAllContacts } from '../actions/contact.action';

@Injectable({
  providedIn: 'root',
})
export class ContactFacade {
  public contacts$ = () => this.store.select(selectContact);

  constructor(private readonly store: Store<AppState>) {}

  public getAllContacts(): void {
    this.store.dispatch(getAllContacts());
  }
}
