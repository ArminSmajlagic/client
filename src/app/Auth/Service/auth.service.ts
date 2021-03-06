import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject,throwError } from 'rxjs';
import { Token } from 'src/app/Models/Token';
import {catchError, map, tap} from 'rxjs/operators'
import { User } from 'src/app/Models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User|null>;
  public currentUser: Observable<User|null>;
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  url='https://localhost:44398/Login';
  urlReg='https://localhost:44398/Register';
  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User|null>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
   }
  login(username: string, password: string) {
    return this.http.post<any>(this.url, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.loggedIn.next(true);
            return user;
        }));
  }

  register(email:string,ime_prezime:string,username:string,password:string,jmbg:string,bdate:string){
    return this.http.post<any>(this.urlReg, {email,ime_prezime,jmbg,bdate,username, password });
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.loggedIn.next(false);

  }

  public get currentUserValue(): User | null{
    return this.currentUserSubject.value;
  }
}
