import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.css']
})
export class CommonTestComponent implements OnInit {

  displayGradePopup = false;

  constructor() { }

  ngOnInit() {
  }

  onGradePopupopen() {
    this.displayGradePopup = true;
  }

  fnReturnGrade($event) {
    this.displayGradePopup = false; // 필수코딩
    console.log('직급코드 : ', $event);
  }
}
