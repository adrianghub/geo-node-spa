import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

interface AuthProps {
  user?: {
    email: string;
    password: string;
  };
}

const authStore = createStore({ name: 'auth' }, withProps<AuthProps>({}));

persistState(authStore, {
  key: 'auth',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  user$ = authStore.pipe(select(state => state.user));

  updateUser(user: AuthProps['user']) {
    authStore.update(state => ({
      ...state,
      user,
    }));
  }

  removeUser() {
    authStore.reset();
  }
}
