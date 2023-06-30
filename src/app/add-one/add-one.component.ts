import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { OneModel } from './one.mode';
import { ValidationError } from 'json-schema';

@Component({
  selector: 'app-add-one',
  templateUrl: './add-one.component.html',
  styleUrls: ['./add-one.component.css'],
  
})
export class AddOneComponent {
  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)])

 identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.value.name;
    const alterEgo = control.value['age'];
    console.log(name,alterEgo,control)
    return name && alterEgo && name === alterEgo ? { identityRevealed: true } : null;
  };

  formGr: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    children: new FormArray([])    
  },{validators:this.identityRevealedValidator})

  // addchild() {
  //   this.children.push(new FormControl('fhgjfgh'));
  // }
  // get children() {
  //   return (this.formGr.controls['children']) as FormArray
  // }

  print() {
    console.log(this.name.value)
  }
  printForm() {
    console.log(this.formGr.value)
  }

 
  
}
