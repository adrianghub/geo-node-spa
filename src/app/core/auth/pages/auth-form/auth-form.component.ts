import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { AuthService } from '@app/core/auth/service/auth.service';

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
  sub: Subscription | undefined;

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.router.navigate(['dashboard']);
  }

  login() {
    const credentials = this.loginForm.getRawValue();

    this.sub = this.auth
      .login(credentials)
      .pipe(
        tap(user => console.log(user)),
        tap(() => console.log('Login successfully!'))
      )
      .subscribe();

    this.router.navigate(['dashboard']);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
