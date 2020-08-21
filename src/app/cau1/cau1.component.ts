import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau1',
  templateUrl: './cau1.component.html',
  styleUrls: ['./cau1.component.scss']
})
export class Cau1Component implements OnInit {
  show = true;
  arr = ["hôm", "nay", "là", "thứ", "6"];
  arr2 = this.arr[0];
  constructor() { }

  ngOnInit(): void {
  }

}
