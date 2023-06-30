import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { userModel } from '../user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  constructor(private httpServeic: HttpService) { }
  List: userModel[] = [];
  userOne: userModel = {}
  ngOnInit() {
    this.getList();
  }

  getList() {
    // this.List = this.httpServeic.getCurrentUser();
    this.httpServeic.listUserEvent
      .subscribe(
        (data: userModel[]) => { this.List = data },
        (error: {}) => { console.log(error) }
      );
  }
}
