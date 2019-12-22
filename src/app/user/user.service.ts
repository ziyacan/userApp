import { User } from './user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDatas: User[];

  constructor(private http: Http) { }

  getUsers(): Observable<User[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .pipe(map(x => this.userDatas = x.json()));

  }
}
