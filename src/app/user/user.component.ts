import { Http } from '@angular/http';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private http: Http
  ) { }

  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    this.userService.getUsers()
    .subscribe(res => this.users = res);
  }
 
}
