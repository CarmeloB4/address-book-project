import { Component, OnInit } from '@angular/core';
import { ContactFacade } from '../../store/facades/contact.facade';
import { Subject } from 'rxjs';
import { Contact } from '../../../../shared/models/contact.model';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
})
export class AddressBookComponent implements OnInit {
  public contacts!: Contact[] | null;
  public selectedContact!: Contact;
  public contactForm = this.fb.group({
    id: null,
    firstname: this.fb.control('', [Validators.required]),
    lastname: this.fb.control('', [Validators.required]),
    telephone: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.email, Validators.required]),
  });

  private destroy$ = new Subject<void>();

  constructor(
    private readonly contactFacade: ContactFacade,
    private fb: FormBuilder
  ) {
    this.contactFacade.getAllContacts();
    this.setContactsData();
  }

  ngOnInit(): void {}

  private setContactsData(): void {
    this.contactFacade
      .contacts$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => (this.contacts = response.contacts));
  }

  private setContactForm(): void {
    this.contactForm.patchValue({
      id: this.selectedContact.id,
      firstname: this.selectedContact.firstname,
      lastname: this.selectedContact.lastname,
      telephone: this.selectedContact.telephone,
      email: this.selectedContact.email,
    });

    this.contactForm.disable();
  }

  public setSelectedContact(contact: Contact): void {
    this.selectedContact = contact;
    this.setContactForm();
  }

  public deleteContact(id: number): void {
    console.log(id);
  }

  public enableEditContact(): void {
    this.contactForm.enable();
  }

  public saveContact(contact: FormGroup): void {
    console.log(contact.value);
  }
}
