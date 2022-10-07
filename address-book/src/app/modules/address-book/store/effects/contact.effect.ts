import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../../../../shared/store/store.interface';
import { Store } from '@ngrx/store';
import { AddressService } from '../../services/address.service';
import {
  getAllContacts,
  getAllContactsSuccess,
} from '../actions/contact.action';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';

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
}
