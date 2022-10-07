import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../../../../shared/store/store.interface';
import { Store } from '@ngrx/store';
import { AddressService } from '../../services/address.service';
import {
  addContact,
  addContactSuccess,
  deleteContact,
  deleteContactSuccess,
  getAllContacts,
  getAllContactsSuccess,
  updateContact,
  updateContactSuccess,
} from '../actions/contact.action';
import { exhaustMap, map, tap } from 'rxjs/operators';

@Injectable()
export class ContactEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly addressService: AddressService
  ) {}

  getContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllContacts),
      exhaustMap(() =>
        this.addressService
          .getAll()
          .pipe(map((contacts) => getAllContactsSuccess({ contacts })))
      )
    )
  );

  updateContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContact),
      exhaustMap(({ contact }) =>
        this.addressService
          .update(contact)
          .pipe(map((contact) => updateContactSuccess({ contact })))
      )
    )
  );

  addContact$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addContact),
        tap(({ contact }) => {
          this.addressService.add(contact);
          this.store.dispatch(addContactSuccess({ contact }));
        })
      ),
    { dispatch: false }
  );

  deleteContact$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteContact),
        tap(({ id }) => {
          this.addressService.delete(id);
          this.store.dispatch(deleteContactSuccess({ id }));
        })
      ),
    { dispatch: false }
  );
}
