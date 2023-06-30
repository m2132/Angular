import { Component, Input, EventEmitter, Output, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { StundetModel } from '../list/student.model';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {
  @Input()
  studentInput: StundetModel = new StundetModel();
  @Input()
  newClassName: string = "regular";

  @Output()
  setCountEvent: EventEmitter<number> = new EventEmitter<number>();
 
  // @Output()
  // deletMeEvent: EventEmitter<number> = new EventEmitter<number>();
  stringName: any = ""
  count: number = 0;

  addCount() {
    this.count++;
  }
  ngOnInit() {
    this.stringName = this.studentInput.Name
  }
  setCount() {
    this.setCountEvent.emit(this.count)
  }
}
