import {Component, OnInit} from '@angular/core';
import {SocialLink} from "../../../interface/social-link";
import {SOCIALS} from "../../../utils/constatns";

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent implements OnInit {

  links: SocialLink[] = SOCIALS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
