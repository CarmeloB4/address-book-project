import { Component, OnInit } from '@angular/core';
import { ContactFacade } from '../../store/facades/contact.facade';
import { Subject } from 'rxjs';
import { Contact } from '../../../../shared/models/contact.model';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
})
export class AddressBookComponent implements OnInit {
  public contacts!: Contact[] | null;
  public selectedContact!: Contact;
  public contactForm = this.fb.group({
    firstname: this.fb.control('', [Validators.required]),
    lastname: this.fb.control('', [Validators.required]),
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

  public setSelectedContact(contact: Contact): void {
    this.selectedContact = contact;
  }

  public deleteContact(id: number): void {
    console.log(id);
  }
}
