import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { userModel } from './http/user.model';
import { Event } from 'ws';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private ListUsers: userModel[] = [];
  listUserEvent: EventEmitter<userModel[]> = new EventEmitter<userModel[]>();

  constructor(private httpClient: HttpClient) {
    this.listUserEvent.subscribe((users: userModel[]) => { this.ListUsers = users })
    this.getAllUsers();
  }

  getCurrentUser() {
    return this.ListUsers;
  }

  private getAllUsers() {
    this.httpClient.get<userModel[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (data: userModel[]) => { this.listUserEvent.emit(data) },
        (error: {}) => { console.log(error) }
      );
  }


  addUser(user: userModel) {
    this.httpClient.post<userModel>('https://jsonplaceholder.typicode.com/users', user)
      .subscribe(
        (data: userModel) => {
          this.listUserEvent.emit([...this.ListUsers, data])
        },
        (error: {}) => { console.log(error) }
      );
  }



}
