import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SvgIcon } from '../../../../shared/enums/svg-icon.enum';
import { Contact } from '../../../../shared/models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  @Output() selectedContact = new EventEmitter<Contact>();
  @Output() deleteContact = new EventEmitter<number>();

  public svgIcon = SvgIcon;

  public fullname(firstname: string, lastname: string): string {
    return `${firstname} ${lastname}`;
  }
}
