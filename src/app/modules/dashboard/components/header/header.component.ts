import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/modules/core/service/auth.service';
import {
  faArrowRightFromBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  leftArrow = faArrowRightFromBracket;
  faUserPlus = faUserPlus;
  constructor(private auth: AuthService) {}

  @Output() addUserEvent = new EventEmitter();


  ngOnInit() {}

  Logout(): void {
    this.auth.logout();
  }
  addUser(): void {
    this.addUserEvent.emit();
  }
}
