import { Component, OnInit } from '@angular/core';
import {SvgIcon} from "../../../../shared/enums/svg-icon.enum";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  public svgIcon = SvgIcon;

  constructor() { }

  ngOnInit(): void {
  }

}
