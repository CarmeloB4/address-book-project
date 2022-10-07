import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';
import { CONTACTS } from '../../../shared/mock-data/mock-contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private contacts: Contact[] = CONTACTS;

  constructor() {}

  //method for update the right contact
  private getArrayIndexById(id: number): number | null {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    return index === -1 ? null : index;
  }

  //get all contacts
  public getAll(): Observable<Contact[]> {
    return of(this.contacts);
  }

  // get contact by id
  public getById(id: number): Observable<Contact | null> {
    const contactById = this.contacts.find((c) => c.id === id);
    if (contactById !== undefined) {
      return of(contactById);
    }

    return of(null);
  }

  //update contact
  public update(contact: Contact): Observable<Contact | null> {
    const index = this.getArrayIndexById(contact.id);
    if (typeof index === 'number') {
      return of((this.contacts[index] = contact));
    }

    return of(null);
  }

  //add contact
  public add(contact: Contact): void {
    this.contacts.push(contact);
  }

  //delete contact
  public delete(id: number): void {
    if (this.getArrayIndexById(id) !== null) {
      this.contacts = this.contacts.filter((c) => c.id !== id);
    }
  }
}
