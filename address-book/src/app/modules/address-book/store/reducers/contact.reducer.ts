import { Contact } from '../../../../shared/models/contact.model';
import { createReducer, on } from '@ngrx/store';
import { getAllContactsSuccess } from '../actions/contact.action';

export interface ContactState {
  contacts: Contact[] | null;
}

export const initialState: ContactState = {
  contacts: null,
};

export const contactReducer = createReducer(
  initialState,
  on(getAllContactsSuccess, (state, { contacts }) => ({ ...state, contacts }))
);
