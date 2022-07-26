import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { UserDTO } from '../../models/user.model';
import { AuthRepository } from '../auth.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private repo: AuthRepository) {}

  login(user: UserDTO): Observable<UserDTO> {
    const { email, password } = user;

    this.repo.updateUser({
      email: email || '',
      password: password || '',
    });

    return of(user);
  }

  register() {}

  logoutUser() {
    this.repo.removeUser();
  }

  isUserAuthorized$() {
    return this.getCurrentUser$().pipe(map(user => !!user));
  }

  getCurrentUser$() {
    return this.repo.user$;
  }
}
