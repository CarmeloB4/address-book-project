import { createAction, props } from '@ngrx/store';
import { Contact } from '../../../../shared/models/contact.model';

export const getAllContacts = createAction('[Address-Book] Get all contacts');

export const getAllContactsSuccess = createAction(
  '[Address-Book] Get all contacts Success',
  props<{ contacts: Contact[] }>()
);

export const getContactById = createAction(
  '[Address-Book] Get contact by id',
  props<{ id: number }>()
);

export const getContactByIdSuccess = createAction(
  '[Address-Book] Get contact by id Success',
  props<{ contact: Contact }>()
);

export const updateContact = createAction(
  '[Address-Book] Update contact',
  props<{ contact: Contact }>()
);

export const addContact = createAction(
  '[Address-Book] Add Contact',
  props<{ contact: Contact }>()
);

export const deleteContact = createAction(
  '[Address-Book] Delete Contact',
  props<{ id: number }>()
);
