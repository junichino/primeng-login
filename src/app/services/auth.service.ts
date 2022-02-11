import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(
    private router: Router,
  ) {
    let userStorage: any = localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<any>(JSON.parse(userStorage));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  login(username: string, password: string): any {
    console.log(username, password);
    if (username === 'admin' && password === 'admin') {
      this.userSubject.next({
        username: username,
        password: password
      });
      localStorage.setItem('user', JSON.stringify({
        username: username,
        password: password
      }));
      this.userSubject.next({
        username: username,
        token: '123456789'
      });
      return {
        username: username,
        token: '123456789'
      };
    } else {
      return false;
    }
  }
  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
