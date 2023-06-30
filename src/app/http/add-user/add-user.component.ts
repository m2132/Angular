import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpService } from "../../http.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private httpService: HttpService) { }

  formttt: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    users:new FormArray[]
  })

get users(){
this.formttt.controls["users"] as FormArray
}
  addUser() {

    this.users.ph
    this.httpService.addUser(this.formttt.value)
  }
}
