import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/service/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isLoggedIn$ = this.authService.getCurrentUser$().pipe(map(user => !!user));

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logoutUser();
  }
}
