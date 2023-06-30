import { Component } from '@angular/core';
import { StundetModel } from './student.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[HttpService]
})
export class ListComponent {
  constructor(private httpService: HttpService) {

  }

  students: Array<StundetModel> = [
    new StundetModel(1, "sara", "0556783731", "פרדו 7"),
    new StundetModel(1, "dvora", "0556783732", "אשל אברהם 7"),
    new StundetModel(1, "chana", "055-96", "יונה הנביא 7")
  ]
  red: string = 'Pink'

  setCount(count: number, key: number) {
    this.students[key].count = count;

    this.httpService.getCurrentUser()
  }

  setId(Id: number, key: number) {
    this.students[key].Id = Id;
  }
}
