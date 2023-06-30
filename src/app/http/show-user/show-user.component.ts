import { Component, Input } from '@angular/core';
import { userModel } from '../user.model';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {
  @Input()
  user: userModel = {};
}
