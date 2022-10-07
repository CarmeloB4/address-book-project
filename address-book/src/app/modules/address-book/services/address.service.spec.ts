import { TestBed } from '@angular/core/testing';
import { AddressService } from './address.service';
import { CONTACTS } from '../../../shared/mock-data/mock-contacts';

describe('AddressService', () => {
  let service: AddressService;
  let mockContacts = CONTACTS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAll should return all contacts', (done: DoneFn) => {
    service
      .getAll()
      .subscribe((contacts) => expect(contacts).toEqual(mockContacts));
    done();
  });

  it('#getById should return contact by id', (done: DoneFn) => {
    service
      .getById(1)
      .subscribe((contact) => expect(contact).toEqual(mockContacts[0]));
    done();
  });

  it('#getdById should return null for not existing id', (done: DoneFn) => {
    service.getById(6).subscribe((contact) => expect(contact).toBeNull());
    done();
  });

  it('#deleteLandlord should delete contact', () => {
    expect(service.contacts.length).toBe(5);
    service.delete(1);
    expect(service.contacts.length).toBe(4);
    expect(service.contacts).not.toContain(mockContacts[0]);
  });

  it('#add should add a contact', () => {
    const newUser = {
      id: 5,
      firstname: 'Melo',
      lastname: 'Rossi',
      telephone: '3214545465',
      email: 'mariorossi@gmail.com',
    };
    expect(service.contacts.length).toBe(5);
    service.add(newUser);
    expect(service.contacts.length).toBe(6);
    expect(service.contacts).toContain(newUser);
  });

  it('#update should update a contact and return it', (done: DoneFn) => {
    const newUser = {
      id: 1,
      firstname: 'Melo',
      lastname: 'Rossi',
      telephone: '3214545465',
      email: 'mariorossi@gmail.com',
    };
    service
      .update(newUser)
      .subscribe((response) => expect(response).not.toEqual(mockContacts[0]));
    done();
  });
});
