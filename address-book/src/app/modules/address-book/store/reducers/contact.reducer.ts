import { Contact } from '../../../../shared/models/contact.model';
import { createReducer, on } from '@ngrx/store';
import {
  addContactSuccess,
  deleteContactSuccess,
  getAllContactsSuccess,
  updateContactSuccess,
} from '../actions/contact.action';

export interface ContactState {
  contacts: Contact[] | undefined;
}

export const initialState: ContactState = {
  contacts: undefined,
};

export const contactReducer = createReducer(
  initialState,
  on(getAllContactsSuccess, (state, { contacts }) => ({ ...state, contacts })),
  on(updateContactSuccess, (state, { contact }) => ({
    ...state,
    contacts: state.contacts?.map((c) =>
      c.id === contact?.id ? { ...contact } : c
    ),
  })),
  on(addContactSuccess, (state, { contact }) => ({
    ...state,
    contacts: state.contacts?.concat(contact),
  })),
  on(deleteContactSuccess, (state, { id }) => ({
    ...state,
    contacts: state.contacts?.filter((c) => c.id !== id),
  }))
);
