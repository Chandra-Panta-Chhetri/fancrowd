import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import UserDTO from 'src/app/shared/models/user-dto';
import { AuthService } from '../services/auth.service';
// import { userInfo } from 'os';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  userSubscription!: Subscription;
  user: UserDTO | null = null;

  constructor(private _authService: AuthService,) {}

  ngOnInit(): void {
    this.userSubscription = this._authService.currentUser.subscribe(
      (user) => (this.user = user)
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onLogOut() {
    this._authService.logOut();
  }
}