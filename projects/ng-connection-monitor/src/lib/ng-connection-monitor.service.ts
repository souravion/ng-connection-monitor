import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, catchError, distinctUntilChanged, Observable, of, switchMap, timer } from 'rxjs';
import { LIB_ENVIRONMENT } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NgConnectionMonitorService {
  private readonly onlineStatus$ = new BehaviorSubject<boolean>(true);
  private readonly pingInterval = 3000;
  private pingUrl = LIB_ENVIRONMENT.pingUrl;

  constructor(private http: HttpClient, private ngZone: NgZone) {
    this.monitorNetworkStatus()
  }

  get isOnline$(): Observable<boolean> {
    return this.onlineStatus$.asObservable();
  }

  private monitorNetworkStatus(): void {
    this.ngZone.runOutsideAngular(() => {
      timer(0, this.pingInterval)
        .pipe(
          switchMap(() => this.pingBackend()),
          distinctUntilChanged()
        )
        .subscribe((isOnline) => {
          this.ngZone.run(() => this.onlineStatus$.next(isOnline));
        });
    });
  }
   private pingBackend(): Observable<boolean> {
    return this.http.get(this.pingUrl, { observe: 'response' }).pipe(
      switchMap((response) => of(response.status === 200)),
      catchError(() => of(false))
    );
  }
}
