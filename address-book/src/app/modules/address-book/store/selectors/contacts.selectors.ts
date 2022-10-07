import { ContactState } from '../reducers/contact.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../shared/store/store.interface';

export const selectContactState = (state: AppState) => state.contactState;

export const selectContact = createSelector(
  selectContactState,
  (selectContact) => selectContact
);
