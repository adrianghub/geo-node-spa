import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.isAuthenticated$();
  }

  private isAuthenticated$(): Observable<boolean> {
    return this.authService.isUserAuthorized$().pipe(
      map(res => {
        if (res) {
          return true;
        }
        this.router.navigate(['/auth']);
        return false;
      }),
      take(1)
    );
  }
}
