import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlertSnackbarRepository } from './alert-snackbar.repository';

@Component({
  selector: 'app-alert-snackbar',
  templateUrl: './alert-snackbar.component.html',
  styleUrls: ['./alert-snackbar.component.scss'],
})
export class AlertSnackbarComponent {
  status$!: Observable<string>;
  message$!: Observable<string>;
  show$!: Observable<boolean>;

  constructor(private repo: AlertSnackbarRepository) {
    this.message$ = this.repo.message$;
    this.status$ = this.repo.status$;
    this.show$ = this.repo.show$;
  }
}
