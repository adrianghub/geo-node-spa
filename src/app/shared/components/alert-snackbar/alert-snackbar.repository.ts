import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';

interface AlertSnackbarProps {
  message: string;
  show: boolean;
  status: 'pending' | 'success' | 'error';
  isSubmitting?: boolean;
}

const snackbarAlertStore = createStore(
  { name: 'snackbar-alert' },
  withProps<AlertSnackbarProps>({ message: '', show: false, status: 'pending', isSubmitting: false })
);

@Injectable({ providedIn: 'root' })
export class AlertSnackbarRepository {
  message$ = snackbarAlertStore.pipe(select(state => state.message));
  show$ = snackbarAlertStore.pipe(select(state => state.show));
  status$ = snackbarAlertStore.pipe(select(state => state.status));
  isSubmitting$ = snackbarAlertStore.pipe(select(state => state.isSubmitting));

  updateSnackbar(alertSnackbar: Partial<AlertSnackbarProps>) {
    snackbarAlertStore.update(state => ({
      ...state,
      ...alertSnackbar,
    }));
  }
}
