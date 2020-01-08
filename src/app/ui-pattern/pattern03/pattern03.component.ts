import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee-data';
import {Code} from '../../model/code-data';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-pattern03',
  templateUrl: './pattern03.component.html',
  styleUrls: ['./pattern03.component.css']
})
export class Pattern03Component implements OnInit {

  employees: Employee[];
  selectedEmps: Employee[] = [];
  targetEmps: Employee[] = [];
  selectedTargetEmps: Employee[] = [];
  grades: Code[] = [];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getEmployees().subscribe(data => {
      this.employees = data;
    });

    this.dataservice.getGrades().subscribe(data => {
      this.grades = data;
    });
  }

  fnMoveRight() {
    if (this.selectedEmps.length > 0) {
      this.targetEmps = this.targetEmps.concat(this.selectedEmps);
      this.employees = this.employees.filter((val, idx) => {
        return this.selectedEmps.indexOf(val) === -1;
      });
    }
    this.selectedEmps = [];
  }

  fnMoveLeft() {
    if (this.selectedTargetEmps.length > 0) {
      this.employees = this.employees.concat(this.selectedTargetEmps);
      this.targetEmps = this.targetEmps.filter((val, idx) => {
        return this.selectedTargetEmps.indexOf(val) === -1;
      });
    }
    this.selectedTargetEmps = [];
  }
}
