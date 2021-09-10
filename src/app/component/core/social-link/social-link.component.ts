import {Component} from '@angular/core';
import {SocialLink} from "../../../interface/social-link";
import {SOCIALS} from "../../../util/constatns";

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent {
  links: SocialLink[] = SOCIALS;
}
