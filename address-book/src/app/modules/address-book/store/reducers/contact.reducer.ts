import { Contact } from '../../../../shared/models/contact.model';
import { createReducer, on } from '@ngrx/store';
import {
  addContactSuccess,
  deleteContactSuccess,
  getAllContactsSuccess,
  updateContactSuccess,
} from '../actions/contact.action';

export interface ContactState {
  contacts: Contact[] | null;
}

export const initialState: ContactState = {
  contacts: null,
};

export const contactReducer = createReducer(
  initialState,
  on(getAllContactsSuccess, (state, { contacts }) => ({ ...state, contacts })),
  on(updateContactSuccess, (state, { contact }) => ({
    ...state,
    contacts: state.contacts?.map((c) =>
      c.id === contact?.id ? { ...contact } : c
    ) as Contact[],
  })),
  on(addContactSuccess, (state, { contact }) => ({
    ...state,
    contacts: state.contacts?.concat(contact) as Contact[],
  })),
  on(deleteContactSuccess, (state, { id }) => ({
    ...state,
    contacts: state.contacts?.filter((c) => c.id !== id) as Contact[],
  }))
);
