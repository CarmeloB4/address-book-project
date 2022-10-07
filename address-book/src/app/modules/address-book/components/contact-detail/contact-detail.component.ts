import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  @Input() contactInfo!: FormGroup;
  @Output() editContact = new EventEmitter<void>();
  @Output() saveContact = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit(): void {}
}
