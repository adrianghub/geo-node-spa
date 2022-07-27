import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/service/auth.service';
import { AlertSnackbarRepository } from '@app/shared/components/alert-snackbar/alert-snackbar.repository';
import { delay, map, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnDestroy {
  isLoggedIn$ = this.authService.getCurrentUser$().pipe(map(user => !!user));
  isSubmitting$ = this.alertSnackbarRepo.isSubmitting$;
  sub!: Subscription;

  constructor(private authService: AuthService, private router: Router, private alertSnackbarRepo: AlertSnackbarRepository) {}

  logout() {
    this.sub = of(true)
      .pipe(
        tap(() => this.alertSnackbarRepo.updateSnackbar({ message: 'Logout successful!', status: 'success', show: true, isSubmitting: true })),
        delay(500),
        tap(() => this.authService.logoutUser()),
        tap(() => this.router.navigate(['logout'])),
        tap(() => this.alertSnackbarRepo.updateSnackbar({ message: '', status: 'pending', show: false, isSubmitting: false }))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
