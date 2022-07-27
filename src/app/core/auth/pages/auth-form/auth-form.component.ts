import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, Subscription, tap } from 'rxjs';
import { AuthService } from '@app/core/auth/service/auth.service';
import { AlertSnackbarRepository } from '@app/shared/components/alert-snackbar/alert-snackbar.repository';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnDestroy {
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
  });
  sub!: Subscription;
  isSubmitting$ = this.alertSnackbarRepo.isSubmitting$;

  constructor(private auth: AuthService, private router: Router, private alertSnackbarRepo: AlertSnackbarRepository) {}

  register() {
    this.router.navigate(['dashboard']);
  }

  login() {
    this.alertSnackbarRepo.updateSnackbar({ message: 'Logging in progress...', show: true, isSubmitting: true });

    const credentials = this.loginForm.getRawValue();

    this.sub = this.auth
      .login(credentials)
      .pipe(
        delay(500),
        tap(() => this.alertSnackbarRepo.updateSnackbar({ message: 'Login successful!', status: 'success', show: true })),
        delay(500),
        tap(() => this.alertSnackbarRepo.updateSnackbar({ message: '', status: 'pending', show: false, isSubmitting: false })),
        tap(() => this.router.navigate(['dashboard'])),
        tap(user => console.log(user))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
