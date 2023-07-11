import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/modules/core/service/auth.service';
import {
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  leftArrow = faArrowRightFromBracket;
  constructor(private auth: AuthService, private render: Renderer2) {}
  ngOnInit() {}
  Logout(): void {
    this.auth.logout();
  }
}
