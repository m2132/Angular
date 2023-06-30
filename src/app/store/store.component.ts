import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-store',
  templateUrl: "./store.component.html",
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  name: string = "shopping";
  age: number = 15;

  count: number = 0;
  ngOnInit() {
    setInterval(() => {
      this.age = 25;

    }, 2000)
  }
  setName = (e: any) => {
    console.log(e)
    this.name = e.target.value
  }
  onClickCount = () => {
    this.count++;
  }
}
