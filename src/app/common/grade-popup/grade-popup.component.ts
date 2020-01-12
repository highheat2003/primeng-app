import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../service/data.service';
import {Code} from '../../model/code-data';

@Component({
  selector: 'app-common-grade-popup',
  templateUrl: './grade-popup.component.html',
  styleUrls: ['./grade-popup.component.css']
})
export class GradePopupComponent implements OnInit {

  @Input() display;
  @Output() returnCode = new EventEmitter<Code>();
  grades: Code[];
  selectedGrade: Code;

  constructor(private dataservice: DataService) {
    console.log('GradePopupComponent : ', this.display);
  }

  ngOnInit() {
    this.dataservice.getGrades().subscribe(data => {
      this.grades = data;
    });
  }

  fnSelect() {
    this.returnCode.emit(this.selectedGrade);
    this.display = false;
  }

  fnClose() {
    this.returnCode.emit(undefined);
    this.display = false;
  }

  onRowDblClick($event: MouseEvent, rowData) {
    this.returnCode.emit(rowData);
    this.display = false;
  }

}
