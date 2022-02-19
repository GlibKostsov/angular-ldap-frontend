import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LDAP_USERS } from '../model/ldap-mock-data';
import { UserLdap } from '../model/user-ldap';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: UserLdap[] = LDAP_USERS;

  getUsers(): Observable<UserLdap[]> {
    return of(this.users);
  }

  getUser(login: string): Observable<UserLdap> {
    return of(this.users.find((user) => user.login === login));
  }

  constructor() {}
}